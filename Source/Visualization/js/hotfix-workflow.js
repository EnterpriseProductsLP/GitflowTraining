/**
 * Created by Eric Burcham on 3/2/2017.
 */
var templateConfig = {
    colors: ["#979797", "#008fb5", "#f1c109"],
    branch: {
        lineWidth: 10,
        spacingX: 50,
        labelRotation: 0,
        showLabel: true
    },
    commit: {
        spacingY: -80,
        dot: {
            size: 14
        },
        message: {
            font: "normal 14pt Arial"
        }
    }
};

var template = new GitGraph.Template(templateConfig);

var gitgraph = new GitGraph({
    template: template,
    orientation: "vertical",
    mode: "compact"
});


var master = gitgraph.branch("master");
master.checkout();
master.commit({
    message: "Initial Commit",
    author: "Eric Burcham <eburcham@eprod.com>"
});

var develop = master.branch("develop");
develop.checkout();
develop.commit({
    message: "Created develop branch.",
    author: "Eric Burcham <eburcham@eprod.com>"
});

var hotfix = master.branch("hotfix");
hotfix.checkout();
hotfix.commit({
    message: "This is MUCH less broken.",
    author: "Eric Burcham <eburcham@eprod.com>"
});

hotfix.merge(develop);
hotfix.merge(master);
master.tag("v1.0.1.0");
