import { Module } from "@nestjs/common";
import { ConsoleModule } from "nestjs-console";
import { TestConsole } from "./test.console";

@Module({
    imports: [ConsoleModule],
    providers: [TestConsole],
    exports: [TestConsole],
})
export class CLIModule {}