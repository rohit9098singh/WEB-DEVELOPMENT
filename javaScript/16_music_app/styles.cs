body {
    margin: 0;
    font-family: Arial, sans-serif;
}

.music-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    position: fixed;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
}

.song-info {
    flex: 1;
    text-align: left;
}

.song-info p {
    margin: 0;
}

.progress-container {
    flex: 2;
    margin: 0 20px;
}

#progress-bar {
    width: 100%;
}

.volume-control {
    display: flex;
    align-items: center;
}

.volume-control label {
    margin-right: 10px;
}

#volume-bar {
    width: 100px;
}

@media (max-width: 600px) {
    .music-footer {
        flex-direction: column;
        align-items: center;
    }

    .progress-container {
        width: 100%;
        margin: 10px 0;
    }

    .volume-control {
        width: 100%;
        justify-content: center;
    }

    #volume-bar {
        width: 80%;
    }
}
