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

var hotfix = master.branch("hotfix");
hotfix.checkout();
hotfix.commit({
   message: "This is MUCH less broken.",
    author: "Eric Burcham <eburcham@eprod.com>"
});

hotfix.merge(develop);
hotfix.merge(master);
master.tag("v1.0.1.0");
