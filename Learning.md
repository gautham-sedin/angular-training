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

## Day 4 – Section C: Micro-Project (Parent ↔ Child Communication in Action)

### Goal

Build a **mini “Project Toggle System”** using:

- ✅ `input()` → pass data down
- ✅ `output()` → send events up
- ✅ Signals in parent (state owner)
- ✅ Clean separation (Container vs Presentational)

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

# Day 5

## Day 5 – Section A: Directives & Pipes (Modern Angular)

Let’s explore on instead of building lot of components, Reactive signals → Instead control and transform the UI without bloating components

| Concept | Purpose |
| --- | --- |
| **Directives** | Modify DOM behavior |
| **Pipes** | Transform displayed data |

### 1. Directives

**Directives →** adds behavior to DOM elements.

**Structural Directives:** Some we already use like `@if`  & `@for`. They will add/remove elements & control the rendering.

**Attribute Directives:** Modify existing elements. 

Some of the example built-in-

```html
<p [class.completed]="isDone">Task</p>
<div [style.background]="'red'"></div>
```

**Creating Custom Directive:**

Let’s create a custom directive called `highlight directive`. - Changing the color of the element based on the mouse interaction.

**highlight.directive.ts**

```tsx
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector: '[appHighlight]',
	standalone: true
})

export class HighlightDirective {
	constructor(private el: ElementRef) {}
	
	@HostListener('mouseeneter')
	onEnter() {
		this.el.nativeElement.style.backgroundColor = '#e0f2fe';
	}
	
	@HostListener('mouseleave')
	onLeave() {
		this.el.nativeElement.style.backgroundColor = '';
	}
}
```

Usage on a html file-

```html
<li appHighlight>Hover me</li>
```

### 2. Pipes

**Pipes →** transforms data before displaying it in the UI. For example as in the code-

```html
<p>{{ username | uppercase }}</p>
```

Fewer more examples on existing built-in pipes in Angular:

- **DatePipe (`date`)**: Formats a date object, number, or ISO string.
    - *Usage:* `{{ today | date:'shortTime' }}`
- **CurrencyPipe (`currency`)**: Transforms a number into a currency string (e.g., USD, EUR).
    - *Usage:* `{{ price | currency:'USD' }}`
- **DecimalPipe (`number`)**: Formats a number with specific decimal points.
    - *Usage:* `{{ pi | number:'1.1-2' }}`
- **PercentPipe (`percent`)**: Converts a number to a percentage string.
    - *Usage:* `{{ progress | percent }}`

Let’s create a Custom Pipe that formats the Status-

**status.pipe.ts**

```tsx
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'status',
	standalone: true
})

export class StatusPipe implements PipeTransform {
	transform(value: string): string {
		return value === 'completed' ? '✅ Completed' : '⏳ Active';
	}
}
```

Usage in html code file-

```html
<p>{{ project.status | status }}</p>

<!--
	Instead of using the traditional way for formatting status-
	<p>{{ project.status === 'completed' ? 'Done' : 'Pending' }}</p>
-->
```

## Day 5 – Section B: Real-World Example (Polishing Your Dashboard with Directives & Pipes)

Instead of the current dashboard that is working nice

- Status text looks raw(active, completed)

- UI feedback is minimal

- Repeated logic exists in templates

Now - let review few changes to update these Display formatted project status, Add hover interaction to project items.

### Step 1: Create a Custom Pipe (Status Formatter)

**shared/pipes/status.pipe.ts**

```tsx
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'status',
	standalone: true
})

export class StatusPipe implements PipeTransform {
	tranform(value: string): string {
		return value === 'completed'
		? '✅ Completed'
    : '🚧 Active';
	}
}
```

**Apply pipe to the UI-**

**project-item.html**

```html
<div
  class="project-item"
  (click)="onToggle()"
  [class.completed]="project().status === 'completed'"
>
  {{ project().name }} - {{ project().status | status }}
</div>
```

### Step 2: Create Custom Directive (Hover Highlight)

**shared/directives/highlight.directive.ts**

```tsx
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onEnter() {
    this.el.nativeElement.style.backgroundColor = '#e0f2fe';
  }

  @HostListener('mouseleave')
  onLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
```

Apply directive

**project-item.component.ts**

```tsx
import { HighlightDirective } from '../../shared/directives/highlight.directive';

@Component({
  ...
  imports: [HighlightDirective]
})
```

**project-item.component.html**

```html
<div
	appHighlight
	class="project-item"
	(click)="onToggle()"
	[class.completed]="project().status === 'completed'"
>
	{{ project().name }} -> {{ project().status | status }}
</div>
```

To improve the Visual Consistency - **project-item.component.css**

```css
.project-item {
  padding: 12px;
  border-bottom: 1px solid #e2e8f0;
  cursor: pointer;
  transition: background 0.2s ease;
}

.completed {
  color: #94a3b8;
  text-decoration: line-through;
}
```

## Day 5 – Section C: Micro-Project (Directive + Pipe Combined UI System)

### Goal

Build a **Task Status Board** where:

- Tasks are displayed with **formatted status (Pipe)**
- Rows have **interactive hover effects (Directive)**
- UI is clean, reusable, and scalable

👉 This simulates a real **Kanban-style UI behavior layer**

**Setup-**

```bash
ng g c features/task-board --standalone
ng g d shared/directives/highlight --standalone
ng g p shared/pipes/priority --standalone
```

---

# Day 6

## Day 6 - Section A: Services & Dependency Injection(Modern Ang with `inject()`)

In our current project -

- State is scatttered across components
- No shared logic
- Hard to scale beyond few components

We are supposed to 

> Centralize State + Business logics
> 

### What is Service?

A Service is a class that contains shared logic or state

Example-

| Service Type | Purpose |
| --- | --- |
| ProjectService | Manage project data |
| AuthService | Handle login/logout |
| ApiService | Handle HTTP calls |
| StateService | Global state |

Instead of ‘Each component managing their own data’ → Central services will own data & Components will consume it!

### Dependency Injection

Angular automatically provides instances of services whenever needed.

**Without DI**

```tsx
const service = new ProjectService();
```

**With DI(Angular way)**

```tsx
constructor(private projectService: ProjectService) {}
```

**With modern `inject()` Angular way-**

```tsx
import { inject } from '@angular/core';

projectService = inject(ProjectService);
```

### Creating a service

1. **Generate a service**
    
    ```bash
    ng g s core/services/project --skip-tests
    ```
    
2. **project.service.ts**
    
    ```tsx
    import { Injectable, signal } from '@angular/core';
    
    @Injectable({
    	providedIn: 'root'
    })
    
    export class ProjectService {
    	// Global state
    	projects = signal([
    		{id: 1, name: 'Portfolio', status: 'active'},
    		...
    	]);
    	
    	addProject(name: string) {...}
    	toggleProject(id: number) {...}
    }
    ```
    
3. **Using service in component**
    
    ```tsx
    import { ProjectService } from '../../core/services/project.service';
    
    @Component({...})
    
    export class DashboardComponent {
      projectService = inject(ProjectService);
    
      // Access state
      projects = this.projectService.projects;
    }
    ```
    

### Data flow

```tsx
ProjectService (Signal State)
        ↓
DashboardComponent
        ↓
ProjectListComponent
        ↓
ProjectItemComponent
```

## Day 6 - Section B: Real-world example (Centralizing State with a Service)

Refactor the last micro-project application -

- **ProjectService is a single source of truth**
- Component consumes state, not own it.
- All updates go through the service.

### Step 1: Strengthen Your Service (Add Derived State)

**project.service.ts**

```tsx
import { Injectable, signal, computed } from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export class ProjectService {
	projects = signal([
		{ id: 1, name: 'Portfolio Website', status: 'active' },
    { id: 2, name: 'AI Chat App', status: 'completed' },
    { id: 3, name: 'E-commerce Platform', status: 'active' }
	]);
	
	showCompleted = signal(true);
	
	// Derived state
	totalProjects = computed(() => this.projects().length);
	
	completedProjects = computed(() =>
		this.projects().filter(p => p.status === 'completed').length
	);
	
	activeProjects = computed(() =>
		this.projects().filter(p => p.status === 'active').length
	);
	
	filteredProjects = computed(() => 
		this.projects().filter(p =>
			this.showCompleted || p.status !== 'completed'
		)
	);
	
	// Actions
	toggleCompletedVisibility() {
		this.showCompleted.update(v != v);
	}
	
	toggleProject(id: number) {
		this.projects.update(projects =>
			projects.map(p =>
				p.id === id
				? {
						...p,
						status: p.status === 'active' ? 'completed' : 'active'
					}
				: p
			)
		);
	}
	
	addProject(name: string) {
		this.projects.update(p => [
			...p,
			{ id: Date.now(), name, status: 'active' }
		]);
	}
}
```

### Step 2: Refactor Dashboard(Remove local state)

**dashboard.component.ts**

```tsx
import { Component, inject } from '@angular/core';
import { ProjectService } from '../../core/services/project.service';
import { ProjectListComponent } from '../project-list/project-list.component';
import { TaskManagerComponent } from '../task-manager/task-manager.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ProjectListComponent, TaskManagerComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  projectService = inject(ProjectService);

}
```

### Step 3: Update Template (Use service directly)

```html
<div class="dashboard">

  <h2>Dashboard Overview</h2>

  <!-- Stats -->
  <div class="cards">
    <div class="card">Total: {{ projectService.totalProjects() }}</div>
    <div class="card">Active: {{ projectService.activeProjects() }}</div>
    <div class="card">Completed: {{ projectService.completedProjects() }}</div>
  </div>

  <!-- Toggle -->
  <button (click)="projectService.toggleCompletedVisibility()">
    Toggle Completed Projects
  </button>
  
	<app-project-list
		[projects]="projectService.filteredProjects()"
		(toggleProject)="projectService.toggleProject($event)"
	>
	</app-project-list>
	
	<app-task-manager></app-task-manager>
</div>
```

### Step 4: No changes needed in Child components

Your `ProjectListComponent`  and `ProjectItemComponents`:

- Still receive data via `input()`
- Still emit data via `output()`

Now you can:

- Add a **Projects Page** (reuse same service)
- Add **Sidebar stats** (same data)
- Connect **API later** without touching components

## Day 6 – Section C: Micro-Project (Shared State with Service Across Components)

### 🎯 Goal

Build a **Shared Counter System** where:

- Multiple components read/write the **same state**
- State lives in a **Service (single source of truth)**
- UI updates automatically using **Signals**

👉 This mimics real-world patterns like:

- Cart count in e-commerce
- Notifications badge
- Global counters / dashboards

---

# Day 7

## Day 7 – Section A: RxJS & Observables (Modern Angular + Signals Bridge)

So far, the application handles - 

- Local + global states
- UI updates

But real world applications need - 

**Asynchronous data (like APIs, user events, streams)**

### What is RxJS?

**RxJS** is a library for handling data streams over time.

### What is Observables?

An **Observable** is a stream that emits values over time.

Examples:

```tsx
// Example of usual arrays
const streams = [1, 2, 3];

// Example of Observables
const streams$ = Observable -> emits 1 -> 2 -> 3 over time
```

Some of the usecases of Observables are -

In API Calls, They act as HTTP Response - In Search inputs, as user typing - In Websockets, live updates the values - In Timers, interval updating.

| Feature | Signal | Observable |
| --- | --- | --- |
| Nature | Synchronous | Asynchronous |
| Use case | UI state | Data streams |
| Simplicity | Easy | Powerful |
| Push updates | Yes | Yes |

### 1. Creating an Observable

**Basic example implementation-**

```tsx
import { Observable } from 'rxjs';
const obs$ = new Observable(observer => {
	observer.next(1);
	observer.next(2);
	observer.next(3);
})
```

**Subscribing to Observable**

```tsx
obs$.subscribe(value =>{
	console.log(value);
})
```

### 2. Common RxJS creators

1. `of()`  → simple values
    
    ```tsx
    import { of } from 'rxjs';
    
    of(1, 2, 3).subscribe(console.log);
    ```
    
2. `from()` → arrays/promises
    
    ```tsx
    from([1, 2, 3]).subscribe(console.log);
    ```
    
3. `interval()` → emits over time
    
    ```tsx
    import { interval } from 'rxjs';
    
    interval(1000).subscribe(val => console.log(val));
    ```
    

### 3. Operators (Core power of RxJS)

→ Operators transform stream

1. `map()` operator
    
    ```tsx
    import { map } from 'rxjs/operators';
    
    of(1, 2, 3)
    	.pipe(map(x => x * 2))
    	.subscribe(console.log);
    ```
    
2. `filter()` operator
    
    ```tsx
    import { filter } from 'rxjs/operator';
    
    of(1, 2, 3, 4)
    	.pipe(filter(x => x % 2 === 0))
    	.subscribe(console.log);
    ```
    

### 4. Use cases of Angular + RxJS

RxJS is heavily used in Angular mainly in these areas - 

→ HTTP (`HttpClient`)

→ Router events

→ Forms (valueChanges)

→ Async pipes

### 5. Signals + RxJS (Modern Ang Pattern)

→ Signals acts as the state

→ Observables which are the async

combines together using `toSignal()` 

```tsx
import { toSignal } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

counter$ = interval(1000);

counter = toSignal(this.counter$, { initialValue: 0 });
```

**Template:**

```html
<h2>{{ counter() }}</h2>
```

## **Day 7 – Section B: Real-World Example (Simulating API Data with RxJS → Signals)**

Right now, `ProjectService` has hardcoded data, While in real-apps

→ Data comes from APIs

→ Arrives asynchronously

→ Changes over time. 

Lets simulate an API using RxJS and convert it into signals

→ Fetch pjts from fake APIs → Show loading state → Update UI automatically → Keep everything signal-driven

### Step 1: Simulate API using RxJS

**project.service.ts**

```tsx
import { Injectable, signal, computed } from '@angular/core';
import { of, delay } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  // 🔹 Simulated API
  private projects$ = of([
    { id: 1, name: 'Portfolio Website', status: 'active' },
    { id: 2, name: 'AI Chat App', status: 'completed' },
    { id: 3, name: 'E-commerce Platform', status: 'active' }
  ]).pipe(delay(2000)); // simulate network delay

	// Convert Observable -> Signals
	projects = toSignal(this.project$, { initialValue: [] });

  showCompleted = signal(true);

  // 🔹 Derived
  totalProjects = computed(() => this.projects().length);

  completedProjects = computed(() =>
    this.projects().filter(p => p.status === 'completed').length
  );

  activeProjects = computed(() =>
    this.projects().filter(p => p.status === 'active').length
  );

  filteredProjects = computed(() =>
    this.projects().filter(p =>
      this.showCompleted() || p.status !== 'completed'
    )
  );

  // 🔹 Actions
  toggleCompleted() {
    this.showCompleted.update(v => !v);
  }

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
}
```

### Step 2: Add Loading State

**Update service:**

```tsx
isLoading = signal(true);

constructor() {
	this.project$.subscribe(() =>{
		this.isLoading.set(false);
	})
}
```

### Step 3: Update Dashboard UI

```html
<div class="dashboard">

  <h2>Dashboard Overview</h2>

  @if (projectService.isLoading()) {
    <p>Loading projects...</p>
  } @else {

    <!-- Stats -->
    <div class="cards">
      <div class="card">Total: {{ projectService.totalProjects() }}</div>
      <div class="card">Active: {{ projectService.activeProjects() }}</div>
      <div class="card">Completed: {{ projectService.completedProjects() }}</div>
    </div>

    <!-- Toggle -->
    <button (click)="projectService.toggleCompleted()">
      Toggle Completed Projects
    </button>

    <!-- Project List -->
    <app-project-list
      [projects]="projectService.filteredProjects()"
      (toggleProject)="projectService.toggleProjectStatus($event)"
    ></app-project-list>

  }

  <!-- Task Manager still local -->
  <app-task-manager></app-task-manager>

</div>
```

## Day 7 – Section C: Micro-Project (Live Search with RxJS → Signals)

---

### 🎯 Goal

Build a **Live Search Component** that:

- Takes user input
- Simulates API calls (debounced)
- Uses RxJS operators
- Converts results into a **Signal for UI rendering**

👉 This mimics real features like:

- Search bars
- Autocomplete
- Filters

---

# Day 8

## Day 8 - Section A: Routing + Lazy loading + Guards(Modern Standalone Ang)

So far, the whole app is a single page dashboard. But real application often has-

- Multiple pages
- Navigation
- Access control
- Performance Optimizations.

### What is Routing?

> Routing allows navigation between different views without reloading the page.
> 

```html
/dashboard
/projects
/tasks
/settings
```

`app.route.ts` → is used in Angular to define Routes, that consists of the path, Component that needs to be loaded.

1. Always define the route in the `app.route.ts` file.
2. Then, enable the router in the `app.config.ts`  file with **`provideRouter`**.
3. Add Router outlet in the app HTML file.

### What is `<router-outlet>`?

> Placeholder where Angular renders routed components
> 
1. Finally, in the respective page, define the Navigation Router links in their HTML page with anchor tag.

### Route Guard

> Controls whether the route can be accessed.
> 

Example usecase-

| Scenario | Guard |
| --- | --- |
| User must login | AuthGuard |
| Admin only page | RoleGuard |
| Prevent unsaved exit | CanDeactivate |

**To create Guard → always use this command**

```bash
ng g guard core/guards/auth --functional
```

### Lazy loading vs Early loading

| Type | Behavior |
| --- | --- |
| Eager | Load everything at start |
| Lazy | Load when needed |

---

## Day 8 – Section B: Real-World Example (Turning Your Dashboard into a Multi-Page App)

**Real-World Requirement-**

Refactor your app to:

`/dashboard` → Projects overview

`/tasks` → Task management page

Sidebar → navigates between pages

Use **lazy-loaded standalone components**

### Step 1: Define Routes

**app.route.ts**

```tsx
import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMath: 'full'
	},
	{
		path: 'dashboard',
		loadComponent: () =>
			import('./features/dashboard/dashboard')
				.then(m => m.Dashboard)
	},
	{
		path: 'tasks',
		loadComponent: () =>
			import('./features/task-manager/task-manager')
				.then(m => m.TaskManager)
	}
];
```

### Step 2: Update Root layout

**app.component.html**

```html
<app-navbar></app-navbar>

<div class="app-container">
	<app-sidebar></app-sidebar>
	
	<main class="main-content">
		<router-outlet></router-outlet>
	</main>
</div>
```

### Step 3: Enable Router

**app.config.ts**

```tsx
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes)
	]
};
```

### Step 4: Update Individual component Navigation

**sidebar.component.ts**

```tsx
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-sidebar',
	standalone: true,
	imports: [RouterModule],
	templateUrls: './sidebar.component.html'
})
export class Sidebar {}
```

**sidebar.component.html**

```html
<aside class="sidebar">
	<ul>
		<li><a routerLink="/dashboard">Dashboard</a></li>
		<li><a routerLink="/tasks">Tasks</a></li>
	</ul>
</aside>
```

### Step 5: Refactor Dashboard (Important)

**Remove this from `dashboard.html`**

```tsx
<app-task-manager></app-task-manager>
```

### Step 6: Verify Lazy Loading

Open DevTools → Network tab:

- Navigate to `/tasks`
- You’ll see Angular load that chunk **only when needed**

---

## Day 8 – Section C: Micro-Project (Multi-Page App with Routing + Guard)

### 🎯 Goal

Build a **mini multi-page app** with:

- ✅ Routing (`/home`, `/admin`)
- ✅ Lazy-loaded standalone components
- ✅ Route Guard (protect admin page)
- ✅ Navigation via sidebar

👉 This mirrors real apps with **public vs protected pages**

---