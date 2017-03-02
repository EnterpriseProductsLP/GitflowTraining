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

develop.commit();