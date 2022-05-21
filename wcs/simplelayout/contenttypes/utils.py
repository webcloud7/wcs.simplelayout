from urllib.parse import urlparse
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
