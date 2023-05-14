/** @param {NS} ns */
export async function main(ns) {
	const target = ns.args[0];
	const minions = ["n00dles","foodnstuff","sigma-cosmetics","joesguns","hong-fang-tea","harakiri-sushi","iron-gym","zer0","nectar-net","max-hardware","CSEC","silver-helix","neo-net","omega-net","phantasy","johnson-ortho","crush-fitness","computek","the-hub","avmnite-02h","netlink","rothman-uni","summit-uni","I.I.I.I","catalyst","rho-construction","millenium-fitness"]
	for (let i = 0; i < minions.length; i++) {
		const minion = minions[i];
		
		//SEND FILE
		if (ns.scp("hackLoop.js", minion) && ns.getServerMaxRam(minion)>2.4) {
			const threadsAmount = Math.floor(ns.getServerMaxRam(minion) / 2.4);
			ns.tprint(minion + " : " + "hackLoop was RECEIVED+++SUCCESS");
			ns.exec("hackLoop.js", minion, threadsAmount, target);
			if(ns.scriptRunning("hackLoop.js",minion)){
				ns.tprint(minion + " : " + "hackLoop+++EXECUTED");
			}
			else{
				ns.tprint(minion + " : " + "hackLoop---NOT RUNNING");
			}	
					
		}
		else {
			ns.tprint(minion + " : " + "hackLoop was NOT RECEIVED---FAILURE");
		}
		
	}
}