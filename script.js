.gallery {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 20px;
}

.gallery img {
    width: 100px;
    height: 100px;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.gallery img:hover {
    transform: scale(1.1);
}

.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
}

.modal img {
    max-width: 80%;
    max-height: 80%;
    border-radius: 10px;
}
