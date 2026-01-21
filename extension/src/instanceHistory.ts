import { Node } from "./robloxExplorerProvider";

export interface HistoryEntry {
	node: Node;
	timestamp: number;
	instancePath: string[];
}

export class InstanceHistory {
	private history: HistoryEntry[] = [];
	private maxSize: number;

	constructor(maxSize: number = 10) {
		this.maxSize = maxSize;
	}

	public add(node: Node, instancePath: string[]): void {
		this.history = this.history.filter(entry => entry.node.id !== node.id);

		this.history.unshift({
			node,
			timestamp: Date.now(),
			instancePath
		});

		if (this.history.length > this.maxSize) {
			this.history = this.history.slice(0, this.maxSize);
		}
	}

	public getRecent(count?: number): HistoryEntry[] {
		const limit = count ?? this.maxSize;
		return this.history.slice(0, limit);
	}

	public clear(): void {
		this.history = [];
	}

	public updateNodeReferences(getNodeById: (id: string) => Node | undefined): void {
		this.history = this.history
			.map(entry => {
				const updatedNode = getNodeById(entry.node.id);
				if (updatedNode) {
					return { ...entry, node: updatedNode };
				}
				return null;
			})
			.filter((entry): entry is HistoryEntry => entry !== null);
	}

}
