// Pause Menu System

class PauseMenu {
    constructor() {
        this.menuOptions = ['Resume', 'Settings', 'Return to Main Menu'];
        this.currentOption = 0;
    }

    displayMenu() {
        console.clear();
        console.log('Pause Menu');
        this.menuOptions.forEach((option, index) => {
            const prefix = index === this.currentOption ? '> ' : '  ';
            console.log(`${prefix}${option}`);
        });
    }

    navigate(direction) {
        if (direction === 'up') {
            this.currentOption = (this.currentOption > 0) ? this.currentOption - 1 : this.menuOptions.length - 1;
        } else if (direction === 'down') {
            this.currentOption = (this.currentOption < this.menuOptions.length - 1) ? this.currentOption + 1 : 0;
        }
    }

    selectOption() {
        switch (this.currentOption) {
            case 0:
                this.resumeGame();
                break;
            case 1:
                this.openSettings();
                break;
            case 2:
                this.returnToMainMenu();
                break;
        }
    }

    resumeGame() {
        console.log('Game Resumed');
        // Logic to resume game
    }

    openSettings() {
        console.log('Settings Menu');
        // Logic to open settings
    }

    returnToMainMenu() {
        console.log('Returning to Main Menu');
        // Logic to return to main menu
    }
}

// Example usage
const pauseMenu = new PauseMenu();
pauseMenu.displayMenu();
// Assume user input handling here to navigate and select options.