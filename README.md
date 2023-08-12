# hesaba-task

Simple shopping app

### App contains below features

- List of products
- Shopping cart
- Simple login page
- Search products by name
- Filter and sort product

### Technologies

- React
- Typescript
- Redux/Redux-toolkit
- Tailwind
- React Router

### Project file structure

You can find each section of project in app directory.
I'll explain each directory:

- assets: assets of app like images, fonts and json data
- components: global components that are shared between pages
- hooks: custom hooks placed here
- redux: redux store config and all slices are here
- routes: all components of each page are here
- types: because of DRY I define some types here
- utils: utils of project and function that repeat in more than on component

## Run project

First you should clone the project.

```bash
git clone https://github.com/erfan-amani/hesaba-task.git
```

### Development mode

After cloning install dependencies:

```bash
npm install
# or
yarn
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

### Using docker

```bash
# build proccess
docker-compose build
# start docker
docker-compose up -d
# stop docker
docker-compose down
```
