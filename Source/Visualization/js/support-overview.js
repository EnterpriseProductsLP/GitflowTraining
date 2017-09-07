/**
 * Created by Eric Burcham on 3/2/2017.
 */
var gitgraph = new GitGraph({
    template: "metro",
    mode: "compact",
    orientation: "vertical",
    elementId: "gitGraph"
});

// Create master and develop branches.
var master = gitgraph.branch("master").commit().commit();
var develop = gitgraph.branch("develop").commit();

// Add some initial commits for good measure.
master.commit();
develop.commit().commit();
master.commit();

// Create a release branch from master.
var release = master.branch("release");

// Create a feature from master.
var feature = master.branch("feature").commit().commit();
feature.merge(release);

var hotfix = master.branch("hotfix").commit().commit().commit();
hotfix.merge(develop);
hotfix.merge(master);

var bugfix = master.branch("bugfix").commit();
bugfix.merge(release);

// Finish the release.s
release.merge(master);

// Merge to develop and clean up.
feature.merge(develop);
feature.delete();
bugfix.merge(develop);
bugfix.delete();