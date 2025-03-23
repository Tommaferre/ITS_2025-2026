import matplotlib.pyplot as plt
import numpy as np

def sierpinski(p1, p2, p3, depth, ax):
    """
    Disegna il triangolo di Sierpinski ricorsivamente.

    :param p1, p2, p3: Coordinate dei vertici del triangolo.
    :param depth: Profondità della ricorsione.
    :param ax: Oggetto per il disegno matplotlib.
    """
    if depth == 0:
        # Disegna il triangolo riempiendolo con un colore
        triangle = np.array([p1, p2, p3, p1])
        ax.fill(triangle[:, 0], triangle[:, 1], 'black', edgecolor='white')
    else:
        # Trova i punti medi dei lati
        mid1 = (p1 + p2) / 2
        mid2 = (p2 + p3) / 2
        mid3 = (p1 + p3) / 2
        
        # Ricorsione sui tre triangoli rimanenti
        sierpinski(p1, mid1, mid3, depth - 1, ax)
        sierpinski(mid1, p2, mid2, depth - 1, ax)
        sierpinski(mid3, mid2, p3, depth - 1, ax)

def sierpinski_quad(p1, p2, p3, p4, depth, ax):
    """
    Disegna una variante del triangolo di Sierpinski con quattro punti iniziali.
    """
    sierpinski(p1, p2, p3, depth, ax)
    sierpinski(p2, p3, p4, depth, ax)

# Impostazione della figura
fig, ax = plt.subplots()
ax.set_aspect('equal')
ax.axis('off')

# 🔹 INSERISCI LE 4 COORDINATE QUI 🔹
p1 = np.array([0, 0])
p2 = np.array([1, 0])
p3 = np.array([0.5, np.sqrt(3) / 2])
p4 = np.array([1.5, np.sqrt(3) / 2])  # Nuovo quarto punto

# Profondità della ricorsione (più alto → più dettagliato)
depth = 5

# Disegna il triangolo di Sierpinski con quattro punti iniziali
sierpinski_quad(p1, p2, p3, p4, depth, ax)

# Mostra il risultato
plt.show()
