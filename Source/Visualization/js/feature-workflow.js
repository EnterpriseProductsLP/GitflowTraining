/**
 * Created by Eric Burcham on 3/2/2017.
 */
var gitgraph = new GitGraph({
    template: "metro",
    orientation: "vertical",
    mode: "compact"
});

var develop = gitgraph.branch("develop");
develop.checkout();
develop.commit({
    message: "Created develop branch.",
    author: "Eric Burcham <eburcham@eprod.com>"
});

var myFeature = develop.branch("my-feature");
myFeature.checkout();
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
develop.checkout();
