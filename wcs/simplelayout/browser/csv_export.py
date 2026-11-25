from plone.restapi.interfaces import ISerializeToJson
from zope.component import getMultiAdapter
from zope.publisher.browser import BrowserView
import csv
import io


PRIMARY_FIELD_BY_TYPE = {
    'File': 'file',
    'Image': 'image',
}


class AllPurposeListingBlockCsvExport(BrowserView):
    """Export all results of an AllPurposeListingBlock as CSV.

    The rows are built from the same serialized items the block view
    renders, so the CSV and the table cannot diverge.
    """

    def __call__(self):
        data = self.serialize_block()
        columns = data.get('customViewFields') or []

        output = io.StringIO()
        writer = csv.writer(output, quoting=csv.QUOTE_ALL)
        writer.writerow([column['title'] for column in columns])
        for item in data.get('items', []):
            writer.writerow(
                [self.cell_value(item, column['token']) for column in columns])
        csv_content = output.getvalue()
        output.close()

        response = self.request.response
        response.setHeader('Content-Type', 'text/csv; charset=utf-8')
        response.setHeader(
            'Content-Disposition',
            f'attachment; filename="{self.context.getId()}.csv"')
        return csv_content

    def serialize_block(self):
        self.request.form['fullobjects'] = '1'
        self.request.form['b_size'] = max(
            len(self.context.results(batch=False)), 1)
        serializer = getMultiAdapter(
            (self.context, self.request), ISerializeToJson)
        return serializer()

    def cell_value(self, item, token):
        if token == 'getObjSize':
            return self.primary_field_property(item, 'size')
        if token == 'mime_type':
            return self.primary_field_property(item, 'content-type')
        value = item.get(token)
        if isinstance(value, (list, tuple)):
            return ', '.join(str(entry) for entry in value)
        return value

    def primary_field_property(self, item, name):
        field_name = PRIMARY_FIELD_BY_TYPE.get(item['@type'])
        return (item.get(field_name) or {}).get(name, '')
