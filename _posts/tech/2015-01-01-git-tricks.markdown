---
title: Algunos trucos con git
date: 2015-01-01 08:00:00 Z
categories:
- desarrollo
- git
comments: true
---

Les dejo una lista de algunos trucos con git, básicos, pero que seguro de interés.

- [Setting up][1] Git

- [Añadiendo archivos][2] a un repositorio

- Para [generar las claves][3]

- [Crear un nuevo branch][4]

<pre>
$ git checkout -b BRANCHNAME
</pre>

- [Hacer merge de un branch][13]

- [Mejor manera de hacer Merge][14]

- Hacer un [fork de un reporitorio][5]

- Hacer un clone de un branch específico

<pre>
$ git clone -b BRANCHNAME --single-branch git://sub.domain.com/repo.git
</pre>

### Configurar un "remote" de un fork y sincronizar

- Para consultar

<pre>
$ git remote -v
</pre>

- Para asociar un upstream

<pre>
$ git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
</pre>

- Para [sincronizar][6]

<pre>
$ git fetch upstream
$ git checkout master
$ git merge upstream/master
</pre>

- Para hacer [push a un remote][7]

- Para hacer un [pull request][8]

- [Github flow][10] en el browser

- [Flow][11]

- [Crear tags][12]

<pre>
$ git tag -a v1.4 -m "my version 1.4"
$ git tag
$ git push origin v1.4
$ git push origin --tags
</pre>

- Reset a una versión previa

<pre>
$ git reset --hard commit-id
$ git push reponame -f
</pre>

[1]: https://help.github.com/articles/set-up-git/ "Set up git"
[2]: https://help.github.com/articles/adding-a-file-to-a-repository-from-the-command-line/ "Add files"
[3]: https://help.github.com/articles/generating-ssh-keys/ "Generating ssh-keys"
[4]: https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/ "Create a branch"
[5]: https://help.github.com/articles/fork-a-repo/ "Forking a repo"
[6]: https://help.github.com/articles/syncing-a-fork/ "Syncing a fork"
[7]: https://help.github.com/articles/pushing-to-a-remote/ "Pushing to a remote"
[8]: https://help.github.com/articles/using-pull-requests/ "Pull Request"
[9]: https://help.github.com/articles/which-remote-url-should-i-use/ "Remote url to use"
[10]: https://help.github.com/articles/github-flow-in-the-browser/ "Github flow in the browser"
[11]: https://guides.github.com/introduction/flow/ "Flow"
[12]: https://git-scm.com/book/en/v2/Git-Basics-Tagging "Tags"
[13]: https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging "Merging a branch"
[14]: http://stackoverflow.com/questions/5601931/best-and-safest-way-to-merge-a-git-branch-into-master "Best way to merge"
