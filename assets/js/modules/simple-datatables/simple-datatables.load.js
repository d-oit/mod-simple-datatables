// Adapted from https://github.com/fiduswriter/simple-datatables/blob/main/docs/demos/19-bootstrap-table/index.html


let tableOptions = {
    perPage: 20,
    perPageSelect: [10, 20, 50, ["{{ T "tablePagingAll" }}", -1]],
    locale: "{{ site.Language.Lang | default "en" }}",
    labels: {
      placeholder: "{{ T "tablePlaceholder" }}",
      searchTitle: "{{ T "tablesSearchTitle" }}",
      perPage: "{{ T "tablesPerPage" }}",
      noRows: "{{ T "tablesNoRows" }}",
      noResults: "{{ T "tablesNoResults" }}",
      info: "{{ T "tablesInfo" }}"
    },
    classes: {
        active: "active",
        disabled: "disabled",
        // class not used yet in hinode selector: "form-select",
        paginationList: "pagination",
        paginationListItem: "page-item",
        paginationListItemLink: "page-link"
    },  
}    

document.querySelectorAll('.data-table').forEach(tbl => {
    let searchable = (tbl.getAttribute('data-table-searchable') === 'true');
    let sortable = (tbl.getAttribute('data-table-sortable') === 'true');
    let paging = (tbl.getAttribute('data-table-paging') === 'true');
 
    tableOptions.sortable = sortable;
    tableOptions.searchable = searchable;
    tableOptions.paging = paging;
    
    new window.simpleDatatables.DataTable(tbl, tableOptions)
})
