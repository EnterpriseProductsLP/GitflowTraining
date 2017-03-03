/**
 * Created by Eric Burcham on 3/2/2017.
 */
var gitgraph = new GitGraph({
    template: "metro",
    orientation: "vertical",
    mode: "compact"
});

var master = gitgraph.branch("master");
master.checkout();
master.commit({
    sha1: "803bd7",
    message: "Initial Commit",
    author: "Eric Burcham <eburcham@eprod.com>",
});

var develop = master.branch("develop");
develop.checkout();
develop.commit({
    sha1: "783d17",
    message: "Created develop branch.",
    author: "Eric Burcham <eburcham@eprod.com>",
});

var addFeatureWorkflow = develop.branch("f-add-feature-workflow");
addFeatureWorkflow.commit({
    sha1: "bfb874",
    message: "Master branch created with initial commit.  Develop branch created.  Time to put some text next to them.",
    author: "Eric Burcham <eburcham@eprod.com>",
});

addFeatureWorkflow.commit({
    sha1: "6dcfb7",
    message: "Got the visualization placed next to the text.",
    author: "Eric Burcham <eburcham@eprod.com>",
});

addFeatureWorkflow.merge(develop, { dotColor: "red" });

