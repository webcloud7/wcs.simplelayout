from plone.behavior.interfaces import IBehaviorAssignable
from urllib.parse import urlparse
from z3c.relationfield.interfaces import IRelation
from z3c.relationfield.interfaces import IRelationList
from zope.schema import getFields
import datetime 


def is_vimeo_url(url):
    # https://vimeo.com/channels/staffpicks/128510631
    parsed_url = urlparse(url)
    path = parsed_url.path.split('/')
    return parsed_url.netloc == 'vimeo.com' and path[-1].isdigit()


def is_youtube_url(url):
    # https://youtu.be/W42x6-Wf3Cs
    parsed_url = urlparse(url)
    path = parsed_url.path.split('/')
    return parsed_url.netloc == 'youtu.be' and len(path) == 2 and path[-1]


def is_youtube_nocookie_url(url):
    # https://www.youtube-nocookie.com/embed/UUrddqT9i_s
    parsed_url = urlparse(url)
    path = parsed_url.path.split('/')
    return parsed_url.netloc == 'www.youtube-nocookie.com' and len(path) == 3 and path[-1]


def today():
    return datetime.datetime.now()


def custom_extract_relations(obj):
    assignable = IBehaviorAssignable(obj, None)
    if assignable is None:
        return
    for behavior in assignable.enumerateBehaviors():
        # The original methods checks for this...
        # if behavior.marker == behavior.interface:
        #     continue
        # But the behavior this should not happen in order to habe refs indexed
        # while adding.
        # This worked on edit because of the LinkIntegrity feature, which
        # updates all realtions upon modifications.
        for name, field in getFields(behavior.interface).items():
            if IRelation.providedBy(field):
                try:
                    relation = getattr(behavior.interface(obj), name)
                except AttributeError:
                    continue
                yield behavior.interface, name, relation
            if IRelationList.providedBy(field):
                try:
                    rel_list = getattr(behavior.interface(obj), name)
                except AttributeError:
                    continue
                if rel_list is not None:
                    for relation in rel_list:
                        yield behavior.interface, name, relation

