// Validación de DNI
function validarDNI(dni) {
    const regex = /^[0-9]{8}[A-Za-z]$/;
    return regex.test(dni);
}

// Cargar citas en el dashboard
document.addEventListener('DOMContentLoaded', () => {
    const userRole = "admin";
    document.getElementById('user-role').textContent = userRole;

    // Datos de ejemplo simulado a una base de datos
    const citas = [
        { id: "C-001", fecha: "2024-06-15", cliente: "Ana López", servicio: "Reparación básica" },
        { id: "C-002", fecha: "2024-06-16", cliente: "Juan Pérez", servicio: "Emergencia" }
    ];

    // Renderizar tabla de citas
    const tabla = document.getElementById('tabla-citas').querySelector('tbody');
    citas.forEach(cita => {
        const row = tabla.insertRow();
        row.innerHTML = `
            <td>${cita.id}</td>
            <td>${cita.fecha}</td>
            <td>${cita.cliente}</td>
            <td><button class="btn-cancelar" data-id="${cita.id}">Cancelar</button></td>
        `;
    });

    // Evento para botones de cancelar
    document.querySelectorAll('.btn-cancelar').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const citaId = e.target.getAttribute('data-id');
            if (confirm(`¿Cancelar cita ${citaId}?`)) {
                alert(`Cita ${citaId} cancelada.`);
            }
        });
    });
});

document.getElementById('btn-logout')?.addEventListener('click', () => {
    window.location.href = "index.html";
});