update documents
set doc_name = $1,
    doc_link = $2
where doc_id = $3;

select * from documents;