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

var gitGraph = new GitGraph({
    template: template,
    orientation: "vertical",
    mode: "compact"
});


var master = gitGraph.branch("master");
master.commit({
    message: "Initial Commit",
    author: "Eric Burcham <eburcham@eprod.com>"
});

var develop = master.branch("develop");
develop.commit({
    message: "Created develop branch.",
    author: "Eric Burcham <eburcham@eprod.com>"
});

var release = develop.branch("r-ethane-systems");
release.commit({
    message: "Release branch created.",
    author: "Eric Burcham <eburcham@eprod.com>"
});

release.commit({
    message: "Fixed the last bug.",
    author: "Eric Burcham <eburcham@eprod.com>"
});

release.merge(master);
master.tag("v1.0.0.0");

release.merge(develop);
release.delete();
