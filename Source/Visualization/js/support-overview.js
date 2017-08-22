/**
 * Created by Eric Burcham on 3/2/2017.
 */
var gitgraph = new GitGraph({
    template: "metro",
    mode: "compact",
    orientation: "vertical",
    elementId: "gitGraph"
});

var master = gitgraph.branch("master").commit().commit();
var develop = gitgraph.branch("develop").commit();
master.commit();
develop.commit().commit();
master.commit();
develop.merge(master);