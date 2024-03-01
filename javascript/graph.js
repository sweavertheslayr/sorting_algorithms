

const bar_count = 50;
const bar_max = 100;
const bar_width = '1rem';

class Bar {
    constructor(height, width, color) {
        this.height = height;
        this.width = width;
        this.color = color;
    }
}

class Graph {

    static bars = [];

    constructor(bar_count) {
        for (let i = 0; i < bar_count; i++) {
            let bar = new Bar(Math.floor(Math.random() * bar_max),
                              bar_width,
                              getComputedStyle(document.documentElement).getPropertyValue('--color-bars'));
            Graph.bars.push(bar);
        }
    }

    updateHTML() {
        
        const graph = document.getElementById('graph');

        for (let i = 0; i < bar_count; i++) {
            const div = document.createElement('div');
            div.classList.add("bar");
            div.style.height = Graph.bars[i].height + '%';
            div.style.width = Graph.bars[i].width;
            div.style.color = Graph.bars[i].color;
            graph.appendChild(div);
        }
    }

    readBars() {
        for (let i = 0; i < bar_count; i++) {
            console.log(Graph.bars[i]);
        }
    }

}


let myGraph = new Graph(bar_count);
myGraph.updateHTML();