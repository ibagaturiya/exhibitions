# exhibitions

Storage for exhibitions published from the [Gaussian Exhibition viewer](https://ibagaturiya.github.io/gaussian_exhibition/).
Each show lives in `shows/<id>/` and opens with a link like
`https://ibagaturiya.github.io/gaussian_exhibition/exhibition_viewer.html?open=https://ibagaturiya.github.io/exhibitions/shows/<id>/`.

The workflow `.github/workflows/cleanup.yml` deletes shows whose `show.json` `expires` date has passed, daily and
whenever a show is published, then replaces the history with a single commit so the space is really freed.
To remove a show early, delete its folder.

Everything here is public. GitHub Pages sites are limited to about 1 GB.

## Your own copy

1. **Use this template → Create a new repository**, Public, any name.
2. **Settings → Pages → Branch: `main`, `/ (root)` → Save.**
3. Make a [fine-grained token](https://github.com/settings/personal-access-tokens/new): *Only select repositories* → your new repo;
   **+ Add permissions → Contents → Read and write**. Copy it (shown once).
4. In the viewer: **Publish**, enter your repo as `your-name/repo-name`, paste the token, publish.

Delete the shows that came with the template, if any. The token stays in your browser only.
