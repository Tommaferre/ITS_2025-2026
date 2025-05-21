import matplotlib.pyplot as plt
import numpy as np

def sierpinski_polygon(vertices, depth, ax):
    """
    Disegna un frattale di Sierpinski su un poligono arbitrario.

    :param vertices: Lista di coordinate dei vertici del poligono.
    :param depth: Profondità della ricorsione.
    :param ax: Oggetto per il disegno matplotlib.
    """
    if depth == 0:
        polygon = np.array(vertices + [vertices[0]])  # Chiude il poligono
        ax.fill(polygon[:, 0], polygon[:, 1], 'black', edgecolor='white')
    else:
        midpoints = [(vertices[i] + vertices[(i+1) % len(vertices)]) / 2 for i in range(len(vertices))]
        for i in range(len(vertices)):
            new_polygon = [vertices[i], midpoints[i], midpoints[(i-1) % len(vertices)]]
            sierpinski_polygon(new_polygon, depth - 1, ax)

# Impostazione della figura
fig, ax = plt.subplots()
ax.set_aspect('equal')
ax.axis('off')

# 🔹 INSERISCI LE COORDINATE QUI 🔹
vertices = [
    np.array([0, 0]),
    np.array([1, 0]),
    np.array([1, 1]),
    np.array([0, 1])  # Un quadrato come esempio
]

# Profondità della ricorsione (più alto → più dettagliato)
depth = 4

# Disegna il frattale
sierpinski_polygon(vertices, depth, ax)

# Mostra il risultato
plt.show()
