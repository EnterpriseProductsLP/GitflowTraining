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


// The master branch is created.
var master = gitGraph.branch("master");
master.commit({
    message: "Created master branch.",
    author: "Eric Burcham <eburcham@eprod.com>"
});

var develop = master.branch("develop");

// A release branch is created from master.
var release = master.branch("release");
release.commit({
    message: "Created release branch.",
    author: "Eric Burcham<eburcham@eprod.com>"
});

// The first feature branch is created from master.
var feature1 = master.branch("feature1");
feature1.commit({
    message: "Created feature1 branch.",
    author: "Eric Burcham <eburcham@eprod.com>"
});

// A second feature branch is created from master.
var defect1 = master.branch("defect1")
defect1.commit({
    message: "Created defect1 branch.",
    author: "Eric Burcham<eburcham@eprod.com>"
});

feature1.merge(release);

var feature2 = master.branch("feature2");
feature2.commit({
    message: "Created feature2 branch.",
    author: "Eric Burcham<eburcham@eprod.com>"
});

feature2.merge(release);

defect1.merge(release);

release.merge(master);
release.delete();

feature1.merge(develop);
feature1.delete();
defect1.merge(develop);
defect1.delete();
feature2.merge(develop);
feature2.delete();
master.merge(develop);
master.commit();