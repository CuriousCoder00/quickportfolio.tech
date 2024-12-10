# Guide to setup the project locally

> [!NOTE]
> This project uses `pnpm` as package manager.

## To Run Locally

Clone the repository:

```sh copy
git clone https://github.com/CuriousCoder00/quickportfolio.tech.git
```

Install dependencies:

```sh copy
cd quickportfolio.tech
pnpm install
```

### Add ui components - shadcn/ui

run following command to add shadcn components

```sh copy
pnpm ui add <component-name>
```

### Build

To build all apps and packages, run:

```sh copy
cd quickportfolio.tech
pnpm build
```

### Develop

To develop all apps and packages, run:

```sh copy
cd quickportfolio.tech
pnpm dev
```

### Add new app or directory within project

To add new directory or app in `apps` or `packages` run:


```sh copy
pnpm turbo gen workspace --name <app-name>
```
