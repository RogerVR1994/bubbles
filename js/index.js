var nodes = new vis.DataSet([
  {label: "Yumyum es chido"},
  {label: "Alternative"},
  {label: "Rock"},
  {label: "Jazz"},
  {label: "Hits"},
  {label: "Dance"},
  {label: "Metal"},
  {label: "Experimental"},
  {label: "Rap"},
  {label: "Electronic"},
]);
var edges = new vis.DataSet();

var container = document.getElementById('bubbles');
var data = {
  nodes: nodes,
  edges: edges
};

var options = {
  nodes: {
    borderWidth:0,
    shape:"circle",
    color:{
      background:'#F92C55', 
      highlight:{
        background:'#000000', 
        border: '#34fd34'
      }
    },
    font:{color:'#fff', size: 30},
    value: 230
  },
  physics: {
    stabilization: false,
    maxVelocity: 20,
    minVelocity:  0.001,
    solver: "forceAtlas2Based",
    repulsion: {
      nodeDistance: 70,
      springLength: 200,
      springConstant: 1,
      damping: 0.4
    }
  }
};
var network = new vis.Network(container, data, options);


// Events
network.on("click", function(e) {
  if (e.nodes.length) {
    var node = nodes.get(e.nodes[0]);
    // Do something
    nodes.update(node);
  }
});