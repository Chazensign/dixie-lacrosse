insert into documents (doc_name, doc_link)
values($1,
       $2);

select * from documents;