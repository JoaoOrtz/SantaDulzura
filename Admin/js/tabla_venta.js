document.addEventListener('DOMContentLoaded', () => {
    const ventaButtons = document.querySelectorAll('#producto .venta');
    
    ventaButtons.forEach(button => {
      button.addEventListener('click', () => {
        const row = button.closest('tr');
        const newRow = row.cloneNode(true);
        newRow.querySelector('.venta').remove();
        
        const ventasTable = document.getElementById('ventas');
        const lastRow = ventasTable.getElementsByTagName('tr')[ventasTable.rows.length - 1];
        if (lastRow) {
          lastRow.parentNode.insertBefore(newRow, lastRow.nextSibling);
        } else {
          ventasTable.appendChild(newRow);
        }
        
        row.remove();
      });
    });
  });
  