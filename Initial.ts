interface Project {
    id: number;
    name: string;
    progress: number;
}

class ProjectBoard {
    private projects: Project[] = [];

    addProject(project: Project): void {
        this.projects.push(project);
    }

    averageProgress(): number {
        if (this.projects.length === 0) {
            return 0;
        }

        const total = this.projects.reduce((sum, project) => sum + project.progress, 0);
        return total / this.projects.length;
    }

    printBoard(): void {
        console.log("Project Board");
        console.log("=============");

        for (const project of this.projects) {
            console.log(`${project.id} | ${project.name} | ${project.progress}%`);
        }

        console.log("=============");
        console.log(`Average Progress: ${this.averageProgress().toFixed(1)}%`);
    }
}

const board = new ProjectBoard();

board.addProject({ id: 1, name: "Website Redesign", progress: 45 });
board.addProject({ id: 2, name: "Mobile Application", progress: 72 });
board.addProject({ id: 3, name: "API Integration", progress: 58 });
board.addProject({ id: 4, name: "Database Migration", progress: 91 });

board.printBoard();
