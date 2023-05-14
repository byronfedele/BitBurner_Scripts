/** @param {NS} ns */
export async function main(ns) {
	let networks = ["home"];
	let start = 0;
	let allNewNetworksLength= 0;
	let j =0;
	while(j<15){
		let allNewNetworks =[];
		start+=networks.length-allNewNetworksLength-1;
		for(let i = start; i < networks.length;i++){
			let newNetworks = [];
			newNetworks = newNetworks.concat(ns.scan(networks[i]));
			//ns.print(String(j)+"-".repeat(j)+newNetworks);
			allNewNetworksLength +=  newNetworks.length;
			for(let j = 0; j< newNetworks.length; j++){
				if(networks.includes(newNetworks[j])){
					allNewNetworksLength -=1;
				}
				else{
					allNewNetworks.push(newNetworks[j]);
				}
			}
		}
		networks = networks.concat(allNewNetworks);
	j+=1;
	}
	ns.tprint(networks);
}