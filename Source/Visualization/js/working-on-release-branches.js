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
master.commit({
    message: "Initial Commit",
    author: "Eric Burcham <eburcham@eprod.com>"
});

var develop = master.branch("develop");
develop.commit({
    message: "Someone did a lot of work.",
    author: "Someone Special <someone@eprod.com>"
});

var release = develop.branch("r-ethane-systems");
release.commit({
    message: "Release branch created.",
    author: "Eric Burcham <eburcham@eprod.com>"
});

var feature = release.branch({
    name: "f-my-feature"
});
feature.commit({
    message: "Eric worked on his feature.",
    author: "Eric Burcham <eburcham@eprod.com>"
});

feature.commit({
    message: "Eric worked on his feature some more.",
    author: "Eric Burcham <eburcham@eprod.com>"
});

feature.commit({
    message: "Eric worked on his feature yet again.",
    author: "Eric Burcham <eburcham@eprod.com>"
});

feature.commit({
    message: "Eric finished his feature.",
    author: "Eric Burcham <eburcham@eprod.com>"
});

feature.merge(develop);

feature.merge(release);

release.merge(master);
master.tag("v1.0.0.0");

release.merge(develop);
release.delete();
