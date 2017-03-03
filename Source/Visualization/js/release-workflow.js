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
    message: "Initial Commit",
    author: "Eric Burcham <eburcham@eprod.com>"
});

var develop = master.branch("develop");
develop.checkout();
develop.commit({
    message: "Created develop branch.",
    author: "Eric Burcham <eburcham@eprod.com>"
});

var release = develop.branch("f-add-feature-workflow");
release.checkout();
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
master.checkout();
