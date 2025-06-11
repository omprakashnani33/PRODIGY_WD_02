class Stopwatch {
    constructor() {
        this.time = 0;
        this.interval = null;
        this.running = false;
        this.lapCount = 0;
        
        // Get DOM elements
        this.timeDisplay = document.getElementById('timeDisplay');
        this.startBtn = document.getElementById('startBtn');
        this.pauseBtn = document.getElementById('pauseBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.lapBtn = document.getElementById('lapBtn');
        this.lapList = document.getElementById('lapList');
        
        // Bind event listeners
        this.bindEvents();
    }
    
    bindEvents() {
        this.startBtn.addEventListener('click', () => this.start());
        this.pauseBtn.addEventListener('click', () => this.pause());
        this.resetBtn.addEventListener('click', () => this.reset());