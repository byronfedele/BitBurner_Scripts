export async function main(ns) {
	const minions = [
		"n00dles","foodnstuff","sigma-cosmetics","joesguns","hong-fang-tea","harakiri-sushi","iron-gym","zer0","nectar-net","max-hardware","CSEC","silver-helix","neo-net","omega-net","phantasy","johnson-ortho","crush-fitness","computek","the-hub","avmnite-02h","netlink","rothman-uni","summit-uni","I.I.I.I","catalyst","rho-construction","millenium-fitness"
	];
	for (let i = 0; i < minions.length; i++) {
		const minion = minions[i];
			if(ns.killall(minion)){
				ns.tprint(minion+" : All scripts killed +++ SUCCESS")
			}
			else{
				ns.tprint(minion+" : All scripts killed --- FAILURE")
			}
		}
}