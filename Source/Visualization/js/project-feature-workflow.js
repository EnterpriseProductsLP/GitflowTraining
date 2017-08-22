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


var develop = gitGraph.branch("develop");
develop.commit({
    message: "Created master branch.",
    author: "Eric Burcham <eburcham@eprod.com>"
});

var myFeature = develop.branch("my-feature");
myFeature.commit({
    message: "Master branch created with initial commit.  Develop branch created.  Time to put some text next to them.",
    author: "Eric Burcham <eburcham@eprod.com>"
});

myFeature.commit({
    message: "Fixed a spelling error.",
    author: "Eric Burcham <eburcham@eprod.com>"
});

myFeature.commit({
    message: "Got the visualization placed next to the text.",
    author: "Eric Burcham <eburcham@eprod.com>"
});

myFeature.merge(develop);
myFeature.delete();
