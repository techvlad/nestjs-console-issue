// console.ts - example of entrypoint
import { BootstrapConsole } from 'nestjs-console';
import { CLIModule } from './cli/cli.module';

const bootstrap = new BootstrapConsole({
    module: CLIModule,
    useDecorators: true
});
bootstrap.init().then(async (app) => {
    try {
        // init your app
        await app.init();
        // boot the cli
        await bootstrap.boot();
        process.exit(0);
    } catch (e) {
        process.exit(1);
    }
});