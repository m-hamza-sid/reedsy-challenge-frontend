## Description
The project uses vitejs as base development tool, and follows atomic design methodology for component
structure.

Static site generation is used in the project just to hint my personal preference to build the similar
functionality.

Certain assumptions have been made to implementation pagination and searching, as in a more realistic
application these operations involve server state management so simulated most of the functionality.

Local search has been done using Fuse.js library.

## Usage

### Development

Run the remote server and visit http://localhost:3333

OR

set the environment variable "ENABLE_MOCK=true", setting this environment variable will load mock resolvers
for network calls.
```bash
cp .env.sample .env
npm run dev
```

### Build

To build the App, run

```bash
npm run build
```

Generated files will be in `dist`
