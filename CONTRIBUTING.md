# CONTRIBUTING

## Continuous Integration

This project runs CI via GitHub Actions.

The CI is setup with development Amazon secrets, and is able to run live connections to the API.

If you need to test a live query against the API, you can push your WIP code to a branch,
and CI will run the live query and commit the PollyJS recordings to the `polly-recordings` branch.

You can easily fetch PollyJS recordings with the following command:

```sh
git fetch && git cherry-pick -x "$(git rev-parse origin/polly-recordings)"
```
