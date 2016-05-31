---
title: "Algunos trucos con git"
date: 2015-01-01 08:00:00
categories: git
comments: true
---

Les dejo una lista de algunos trucos con git, básicos, pero que seguro de interés.

- [Seting up][1] Git

- [Añadiendo archivos][2] a un repositorio

- Para [generar las claves][3]

- [Crear un nuevo branch][4]

	> git checkout -b BRANCHNAME

- Hacer un [fork de un reporitorio][5]

- Hacer un clone de un branch específico

	> git clone -b BRANCHNAME --single-branch git://sub.domain.com/repo.git

### Configurar un "remote" de un fork y sincronizar

- Para consultar

	> git remote -v

- Para asociar un upstream

	> git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git

- Para [sincronizar][6]

	> git fetch upstream
	> git checkout master
	> git merge upstream/master

- Para hacer [push a un remote][7]

- Para hacer un [pull request][8]

- [Github flow][10] en el browser

- [Flow][11]


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