Angular → JS framework. 

## Features of Angular-

1. Template
2. Data binding
3. Form
4. Routing
5. Observables
6. PWA

# Introduction to Typescript

Typescript → strongly typed prog lang. Superset of JS. 

### How to maximize type safety

- Enable strict mode - In `tsconfig.json` → Turn on `strict: true` for strongest available checks.
- Avoid any and Type assertions - Using `any` or forced casts -(e.g., value as string)
- Use Type narrowing - use Type guards like `typeof` or `instanceof` instead of forcing the types.
- Keeps the code free from undefined and null errors.

### Steps to create a typescript file

- `npm init`  to initialize npm and create a package.json file
- Install typescript with `npm i typescript`
- Initialize typescript with `tsc --init`
- To compile typescript files `tsc`

**SPA** - The whole resource will be sent to the client browser as soon as the first request is being made. and after requests will be handled within client browser only. 

Always its better to enable strict mode in the tsconfig.json file - 

```tsx
{
	"strict": true,                 /* Enables all the strict type-checking options. */
}
```

This will promptly generate error if you try to access a variable that is not defined. 

### Examples of declaring and accessing variables

```tsx
let empList : string[];

empList = ["User1", "User2", "User3", "User4"];

let depList : Array<number>;

numList = [1, 2, 3, 4, 5];
```

## Functions

There are diff ways to write and define function in typescript- 

```tsx
// Using normal function declaration
function add(num1: number, num2: number) : number {
	return num1 + num2;
}

// Using arrow functions
const sub = (num1: number, num2: number) : number => num1 - num2;
```

Let’s try a function with reduce function in it -

```tsx
function add_with_reduce(num1: number, num2: number, ...num3: number[]) : number {
	return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}

let numbers = [1, 2, 3, 4, 5]
console.log(add_with_reduce(2, 3, ...numbers));
// Other ways -
console.log(add_with_reduce(2, 3, 1, 2, 3, 4, 5, 6, 7)); // num1 - 2, num2 - 3, num3 - rest of the values from (1, 2, 3, 4, ...)

/*
	Output: 20
*/
```

## Classes & Related concepts

Let’s write a simple class file with a class name called - Employee in which we can declare few fields and then try to call using an object that is initialized later - 

We will learn - Intro to class - Creating class & its instance - Class props - Member visibs - Static members.

**class.ts**

```tsx
class Employee {
	#id!: number;               // You can use a hash symbol to make a variable private
	name!: string;
	address!: string;
	
	// We can use constructors also to define the class fields
	constructor(id: number, name: string, address: string) {
		this.address = address;
		this.id = id;
		this.name = name;
	}
	
	static getEmployeeCount(): number {
		return 50;
	}
}

let john = new Employee();

john.id = 1;
john.name = 'John';
john.address = '1 Highway';

console.log(john);

// Using constructor to initialize variables
let aravind = new Employee(102, 'Aravind', 'NorthStreet New Jersey');

console.log(aravind);

Employee.getEmployeeCount(); // You can call static members without creating an instance. That's the actual meaning of static.

/*
	Running `node class` in the terminal will prompt this output- Output:
	Employee { id: 1, name: 'John', address: '1 Highway' }
*/
```

**Getter & Setter methods in ts-**

```tsx
class Employee {
	#id!: number;               // You can use a hash symbol to make a variable private
	name!: string;
	address!: string;
	
	// ... Other implementations
	
	get empId(): number {
		return this.#id;
	}
	
	set empId(id: number) {
		this.#id = id;
	} 
}
```

You can also explicitly declare interfaces - that can also act like a data type in the declarations - 

**class.ts-**

```tsx
interface Address {
	street: string;
	city?: string;       // To create optional members in the interface 
	state: string;
	pincode: string;
};

class Employee {
	#id: number;
	
	protected name: string;
	
	address: Address;
	
	// Other implementations including setters & getters
}

let john = new Employee(1, 'John', {
	street: "Highway street",
	city: "Chennai",
	state: "TN",
	pincode: "700089",
});
```

## Decorators

- You can actually modify the behavior of the class, method or property at runtime.

Decorators - are something that you might be able to see on the top of the class or object, with `@` symbol.

```tsx
// Examples of decorators - 
@Component
@Entity
```

Learning some of the properties in the `tsconfig.json` file-

```tsx
"outDir": "./dist"
```

- This properties is to Redirect all the output files in to one single folder called ./dist so that its easy to manage the output files alone.

```tsx
"sourceMap": true
```

- This will generate files that will map all the browser compiling js files to corresponding ts files that will help us debug the whole application seamlessly.

---

# Angular

Angular is not old NgModule-heavy framework. It has evolved into a component-first, standalone-driven, reactive UI framework. 

Here I have created is a 10 Day detailed Angular course that comprises of 4 different sections in each days that represents different sections of learning.

# Day1

## Day 1 – Section A: Foundations (Angular CLI + Standalone Architecture)

### Angular CLI

Install CLI-

```bash
npm install -g @angular/cli
```

To create new project - 

```bash
ng new project-mgmt
```

During setup -

- ✔ Choose **Standalone Components → YES**
- ✔ Routing → YES
- ✔ Style → CSS (or SCSS if you prefer)

To run the project - 

```bash
ng serve
```

Open the endpoint - `https://localhost:4200`

**StandAlone Component-**

```tsx
import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [], // other components, directives
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
```

| Property | Purpose |
| --- | --- |
| `selector` | HTML tag to use component |
| `standalone` | Enables module-less architecture |
| `imports` | Explicit dependency system |
| `template` | UI structure |
| `styles` | Component styling |

## Day 1 – Section B: Real-World Example (Applying Foundations)

Before adding features you need a clean, scalable foundation - with root layout, reusable UI sections. 

### Component Architecture

```tsx
AppComponent (Root)
 ├── NavbarComponent
 ├── SidebarComponent
 └── DashboardComponent
```

**To generate these components in UI way-**

### Real-world Example Application

### Step 1: Generate Components (CLI way)

```bash
ng generate component layout/navbar--standalone
ng generate component layout/sidebar--standalone
ng generate component features/dashboard--standalone
```

### Step 2: Navbar Component (Example)

```tsx
import {Component }from'@angular/core';

@Component({
  selector:'app-navbar',
  standalone:true,
  template:`
    <nav style="background:#1e293b; color:white; padding:10px;">
      <h2>Project Dashboard</h2>
    </nav>
  `
})
exportclassNavbarComponent {}
```

---

### Step 3: Sidebar Component

```tsx
import {Component }from'@angular/core';

@Component({
  selector:'app-sidebar',
  standalone:true,
  template:`
    <aside style="width:200px; background:#334155; color:white; height:100vh;">
      <ul>
        <li>Dashboard</li>
        <li>Projects</li>
        <li>Tasks</li>
      </ul>
    </aside>
  `
})
exportclassSidebarComponent {}
```

---

### Step 4: Dashboard Component

```tsx
import {Component }from'@angular/core';

@Component({
  selector:'app-dashboard',
  standalone:true,
  template:`
    <div style="padding:20px;">
      <h3>Welcome to Dashboard</h3>
      <p>Your projects overview will appear here.</p>
    </div>
  `
})
exportclassDashboardComponent {}
```

---

### Step 5: Compose Everything in Root (`AppComponent`)

This is where **Standalone architecture shines**.

```tsx
import {Component }from'@angular/core';
import {NavbarComponent }from'./layout/navbar/navbar.component';
import {SidebarComponent }from'./layout/sidebar/sidebar.component';
import {DashboardComponent }from'./features/dashboard/dashboard.component';

@Component({
  selector:'app-root',
  standalone:true,
  imports: [NavbarComponent,SidebarComponent,DashboardComponent],
  template:`
    <app-navbar></app-navbar>

    <div style="display:flex;">
      <app-sidebar></app-sidebar>
      <app-dashboard></app-dashboard>
    </div>
  `
})
exportclassAppComponent {}
```

## Day 1 – Section C: Micro-Project (Standalone Layout with Separate Files)

Goal of the micro project-

Build a basic dashboard layout using -

- StandAlone components
- Proper folder structure
- Seperate .ts, .html, .css files

Folder structure - 

```bash
src/app/
 ├── layout/
 │   ├── navbar/
 │   │   ├── navbar.component.ts
 │   │   ├── navbar.component.html
 │   │   └── navbar.component.css
 │   ├── sidebar/
 │   │   ├── sidebar.component.ts
 │   │   ├── sidebar.component.html
 │   │   └── sidebar.component.css
 ├── features/
 │   └── dashboard/
 │       ├── dashboard.component.ts
 │       ├── dashboard.component.html
 │       └── dashboard.component.css
 ├── app.component.ts
 ├── app.component.html
 └── app.component.css
```

Refer the day1-dashboard file for the project file to fork and contribute on the project.

---

# Day2

## Day 2 – Section A: Templates (Control Flow + Data Binding)

Angular mostly concentrates on the Dynamic UI engine, instead being traditional static HTML templates. This module covers - 

- Modern control flow
- Data binding(Property, Event, Interpolation)
- Rendering dynamic data

### Interpolation - {{ }}

Angular inserting dynamic data into the UI is called Interpolation. 

**typescript file-**

```tsx
title = 'Project Dashboard';
```

**html file-**

```html
<h1> {{ title }} </h1>
```

### Property Binding- [ ]

Used to bind values to HTML attributes or DOM properties like - disabled.

**typescript file-**

```tsx
isDisabled = true;
```

**html file-**

```html
<button [disabled]="isDisabled">Click Me</button>
```

### Event Binding- ( )

Used to handle user interactions like - click functions.

**typescript file-**

```tsx
onClick() {
	console.log('Button clicked');	
}
```

**html file-**

```html
<button (click)="onClick">Click</button>
```

### Two-way Binding-

In modern angular(stand-alone first), you’ll rely on `[(ngModel)]` heavily, (Reactive forms > Template forms)

### Modern Control Flow -

**`@if` (Condition Rendering)**

**typescript code-**

```tsx
isLoggedIn = true
```

**html code-**

```html
@if (isLoggedIn) {
	<p>Welcome Back!</p>
} else {
	<p>Please login!</p>
}
```

**`@for` (Looping Data)**

**typescript code-**

```tsx
tasks = ['Design UI', 'Build API', 'Test App']
```

**html code-**

```html
@for (task of tasks; track $index) {
	<li>{{ task }}</li>
}
```

`@switch` **(Multiple conditions)**

**typescript code-**

```tsx
status = 'pending
```

**html code-**

```html
@switch (status) {
  @case ('completed') {
    <p>Done</p>
  }
  @case ('pending') {
    <p>In Progress</p>
  }
  @default {
    <p>Unknown</p>
  }
}
```

## **Day 2 – Section B: Real-World Example (Dynamic Dashboard UI)**

The dashboard is very static right now. Let’s add some interactions and make the values dynamic.

### Requirements

- Display list of projects
- Show their status
- Allow users to toggle visibility of completed projects
- Render UI dynamically using modern Angular control flow

### Step 1: Define data in Component

```tsx
projects = [
	{ id: 1, name: 'Portfolio Website', status: 'active' },
	{ id: 2, name: 'AI Chat App', status: 'completed' },
  { id: 3, name: 'E-commerce Platform', status: 'active' }
];

showCompleted = true;
```

### Step 2: Render Projects using `@for`

```html
<h3>Projects</h3>

<ul>
  @for (project of projects; track project.id) {
    <li>
      {{ project.name }} - {{ project.status }}
    </li>
  }
</ul>
```

### Step 3: Conditional Rendering `@if`

```html
@for (project of projects; track project.id) {
  @if (showCompleted || project.status !== 'completed') {
    <li>
      {{ project.name }} - {{ project.status }}
    </li>
  }
}
```

### Step 4: Add Interaction (Event Binding)

```html
<button (click)="toggleCompleted()">
	Toggle Completed Projects
</button>
```

```tsx
toggleCompleted() {
	this.showCompleted = !this.showCompleted;
}
```

### Step 5: Improve UI with Property Binding

```html
<li [style.color]="project.status === 'completed' ? 'gray' : 'black'">
	{{ project.name }} - {{ project.status }}
</li>
```

## Day 2 – Section C: Micro-Project (Dynamic Task Manager)

**Goal of This Micro-Project-**

Build a **Task Manager UI** using:

- `@for` → render tasks
- `@if` → conditional display
- Event Binding → user interaction
- Property Binding → dynamic styling

👉 This is your **first interactive Angular feature**

Refer the day2-task-manager file for the project file to fork and contribute on the project.

---

# Day 3

## Day 3 – Section A: Signals (Deep Dive into Angular Reactivity)

Dirty checking in Angular refers to the process where the framework compares the current value of a model variable against its previous value to determine if a change has occurred.

Before Signals, Angular relies on - Dirty checking for the state management. It’s built-in reactive state system.

It allows Angular to -

- Track exactly what changed
- Updates only what is needed
- Eliminate unnecessary rendering

A **Signal is a reactive variable** that notifies Angular when its value changes.

### Creating a Signal

```tsx
import { signal } from '@angular/core';

count = signal(0);
```

**Reading the signal**

```tsx
count()
```

**Updating a signal**

```tsx
this.count.set(5);
// Or use the other method-
this.count.update(value => value + 1);
```

### Updated Signals

Used when one variable is depends on another

```tsx
import { computed } from '@angular/core';

doubleCount = computed(() => this.count * 2);
```

### Effects(Side Effects)

Run logics when a signal changes

```tsx
import { effect } from '@angular/core';

effect(() => {
	console.log('Count changed:', this.count());
});
```

> Use cases:
> 
> - Logging
> - API calls
> - Local storage sync
> - Debugging

**Signals in Templates**

```html
<h2>{{ count() }}</h2>
<button (click)="count.update(c => c + 1)">
	Increment
</button>
```

## Day 3 – Section B: Real-World Example (Signals in Your Dashboard)

The dashboard is currently very minimal - Arrays are plain vars, UI updates depends on writing logics. Let’s change the dashboard into reactive system using signals.

### Step 1: Convert states into Signals

```tsx
import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  projects = signals([
	  { id: 1, name: 'Portfolio Website', status: 'active' },
	  { id: 2, name: 'AI Chat App', status: 'completed' },
	  { id: 3, name: 'E-commerce Platform', status: 'active' },
  ]);
  
  showCompleted = signal(true);
}
```

### Step 2: Derived state with `compute()`

```tsx
totalProjects = computed(() => this.projects().length);

completedProjects = computed(() => 
	this.project().filter(p => p.status === 'completed').length
);

activeProjects = computed(() => 
	this.project().filter(p => p.status === 'active').length
);
```

### Step 3: Filtered View(Reactive)

```tsx
filteredProjects = computed(() =>
	this.projects().filter(p =>
		this.showCompleted() || p.status !== 'completed'
	)
);
```

### Step 4: Update state(Reactive way)

```tsx
toggleCompleted() {
	this.showCompleted.update(v != v);
}
```

| Feature | Before | After |
| --- | --- | --- |
| State | Plain variables | Signals |
| Derived data | Manual | `computed()` |
| UI updates | Manual logic | Automatic |
| Scalability | Low | High |

### Day 3 – Section C: Micro-Project (Signal-Based Task Manager)

Goal-

Rebuild the task manager using Signals so that -

- State is reactive
- UI updates automatically
- No manual syncing bugs

Refer the day3-task-manager for the project to fork and contribute it.

---

# Day 4

## **Day 4 – Section A: Component Communication (Inputs, Outputs, Signal Inputs)**

App will have tree of components-

```bash
AppComponent
 └── DashboardComponent
       ├── ProjectListComponent (coming)
       └── TaskManagerComponent
```

| Direction | Technique |
| --- | --- |
| Parent → Child | `@Input` / `input()` |
| Child → Parent | `@Output` / `output()` |
| Shared State | (Later → Services) |

### 1. Parent → Child Communication

**In traditional `@Input()` - Parent sends data → Child receives it.**

**Child component**

```tsx
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-child',
	standalone: true,
	imports: [],
	template: `<p>{{ message }}</p>`
})

export class ChildComponent {
	@Input() message!: string;
}
```

**Parent template**

```html
<app-child [message]="'Hello from Parent'"></app-child>
```

**In Modern Signal-based, `input()`** 

```tsx
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `<p>{{ message() }}</p>`
})
export class ChildComponent {
  message = input<string>();
}
```

```html
<app-child [message]="parentMessage"></app-child>
```

### 2. Child → Parent Communication

**In traditional `@Output` Child emits event → Parent listens**

**Child component**

```tsx
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-child',
	standalone: true,
	template: `<button (click)="send()">Send</button>`
})

export class ChildComponent {
	@Output notify = new EventEmitter<string>();
	
	send() {
		this.notify.emit('Hello Parent');
	}
}
```

**Parent component**

```html
<app-child (notify)="handleMessage($event)"></app-child>

handleMessage(msg: string) {
	console.log(msg);
}
```

**In Modern way, `output()`** 

```tsx
import { Component, output } from '@angular/core';

@Component({
	selector: 'app-child',
	standalone: true,
	template: `<button (click)="send()">Send</button>`
})

export class ChildComponent {
	notify = output<string>();
	
	send() {
		this.notify.emit('Hello Parent!');
	}
}
```

### 3. Combined Flow

**Sample flow-**

```bash
Parent -> sends projects list -> Child renders
Child -> user clicks -> emits event -> Parent updates state
```

| Component | Responsibility |
| --- | --- |
| Dashboard | Holds state (signals) |
| ProjectList | Displays projects |
| ProjectItem | Handles click/toggle |

## Day 4 – Section B: Real-World Example (Breaking Dashboard into Communicating Components)

Current, working DashboardComponent is doing over work - Holds project state - Renders project list - Handles interactions.

God components like these hard to scale. Component composition are maintainable systems.

### Responsibility split table

| Component | Responsibility |
| --- | --- |
| Dashboard | Holds signals (projects, filters) |
| ProjectList | Displays projects |
| ProjectList | Emits user actions |

### Step 1: Generate New Component

```bash
ng g c features/project-list --standalone
```

### Step 2: Child Component (ProjectList)

**project-list.ts**

```tsx
import { Component, input, output } from '@angular/core';

@Component({
	selector: 'app-project-list',
	standalone: true,
	templateUrl: './project-list.html',
	styleUrls: ['./project-list.css']
})

export class ProjectList {
	// Input(from Parent)
	projects = input<any[]>();
	
	// Output(to Parent)
	toggleProject = output<number>();
	
	onToggle(id: number) {
		this.toggleProject.emit(id);
	}
}
```

**project-list.html**

```html
<ul>
	@for(project of projects(); track project.id) {
		<li
			(click)="onToggle(project.id)"
			[class.completed]="project.status === 'completed'"
		>
			{{ project.name }} - {{ project.status }}
		</li>
	}
</ul>
```

**project-list.css**

```css
li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

.completed {
  color: gray;
  text-decoration: line-through;
}

li:hover {
  background: #f1f5f9;
}
```

### Step 3: Update dashboard(parent)

**dashboard.ts**

```tsx
import { Component, signal, computed } from '@angular/core';
import { TaskManager } ...
import { ProjectLis } ...

@Component({
	selector: 'app-dashboard',
	standalone: true,
	imports: [TaskManager, ProjectList],
	templateUrl: './dashboard.html',
	styleUrls: ['./dashboard.css']
})

export class Dashboard {
	// State
	projects = signal([
    { id: 1, name: 'Portfolio Website', status: 'active' },
    { id: 2, name: 'AI Chat App', status: 'completed' },
    { id: 3, name: 'E-commerce Platform', status: 'active' }
  ]);
  
  showCompleted = signal(true);
  
  // Derived
  totalProjects = computed(() => this.projects.length);
  
  filteredProjects = computed(() => 
	  this.projects().filter(p =>
		  this.showCompleted() || p.status !== 'completed'
	  )
  );
  
  // Handles child event
  toggleProjectStatus(projectId: number) {
	  this.projects.update(projects => 
		  projects.map(p =>
			  p.id === projectId
			  ? {
					  ...p,
					  status: p.status === 'active' ? 'completed' : 'active'
				  }
				: p
		  )
	  );
  }
  
  toggleCompleted() {
	  this.showCompleted.update(v != v);
  }
}
```

**dashboard.html**

```html
<div class="dashboard">

  <h2>Dashboard Overview</h2>

  <!-- Stats -->
  <div class="cards">
    <div class="card">Total: {{ totalProjects() }}</div>
  </div>

  <!-- Toggle -->
  <button (click)="toggleCompleted()">
    Toggle Completed Projects
  </button>

  <!-- Child Component -->
  <app-project-list
    [projects]="filteredProjects()"
    (toggleProject)="toggleProjectStatus($event)"
  ></app-project-list>

  <!-- Task Manager -->
  <app-task-manager></app-task-manager>

</div>
```

---

## Extra Learning - related to Angular version updates

> 
> 
> 
> ### New standard of not using the file suffices - `<file-name>.component.ts`
> 
> Starting with **Angular 20** (released in 2025), the official recommendation for naming files has changed. The **latest version** favors the shorter `file-name.ts` format over the traditional `file-name.component.ts`.
> 
> **The New Standards (Angular 20+)**
> In the most recent versions, Angular encourages removing the "type" suffix from the file name and the "Component" or "Service" suffix from the class name.
> 
> | **Feature** | **Legacy Convention (v2–v19)** | **Modern Convention (v20+)** |
> | --- | --- | --- |
> | **Component File** | `user-profile.component.ts` | `user-profile.ts` |
> | **Component Class** | `export class UserProfileComponent` | `export class UserProfile` |
> | **Service File** | `auth.service.ts` | `auth-store.ts` (or `auth-api.ts`) |
> | **Directives** | `highlight.directive.ts` | `highlight.ts`  |
> 
> ### The Breakdown of `standalone: true` redundancy
> 
> - **Before (v14–v18):** You had to explicitly write `standalone: true` to opt into the standalone architecture.
> - **Now (v19+):** All components, pipes, and directives are **standalone by default**. If you leave the flag out entirely, Angular assumes it is standalone.
> - **The "New" Flag:** If you actually want to use the old `NgModule` pattern, you now have to explicitly write **`standalone: false`**.

---