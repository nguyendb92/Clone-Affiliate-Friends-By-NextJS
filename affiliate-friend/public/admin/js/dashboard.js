$(document).ready(function() {
    $('#dataTables-example').DataTable({
        responsive: true,
        "pageLength": 100,
        "lengthMenu": [10, 50, 100, 500, 1000],
        language: {
            "url": "/static/base/admin/js/dataTables/dt-ja.json"
        }
    });
});