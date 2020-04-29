import { Console, Command } from 'nestjs-console';

@Console({
    name: 'test',
    description: 'Test console'
})
export class TestConsole {
    @Command({
        command: 'test',
        description: 'Test command'
    })
    runTest() {
        console.log('Test')
    }
}