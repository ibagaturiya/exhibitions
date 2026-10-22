# exhibitions

Storage for exhibitions published from the [Gaussian Exhibition viewer](https://ibagaturiya.github.io/gaussian_exhibition/).
Each show lives in `shows/<id>/` and opens with a link like
`https://ibagaturiya.github.io/gaussian_exhibition/exhibition_viewer.html?open=https://ibagaturiya.github.io/exhibitions/shows/<id>/`.

A daily workflow (`.github/workflows/cleanup.yml`) deletes shows whose `show.json` `expires` date has passed,
then replaces the history with a single commit so the space is really freed. To remove a show early, delete its folder.

Everything here is public. GitHub Pages sites are limited to about 1 GB.
