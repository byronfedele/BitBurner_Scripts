/** @param {NS} ns */
export async function main(ns) {
	const minions = ["home", "n00dles", "foodnstuff", "sigma-cosmetics", "joesguns", "hong-fang-tea", "harakiri-sushi", "iron-gym", "zer0", "nectar-net", "max-hardware", "CSEC", "silver-helix", "neo-net", "omega-net", "phantasy", "johnson-ortho", "crush-fitness", "computek", "the-hub", "avmnite-02h", "netlink", "rothman-uni", "summit-uni", "I.I.I.I", "syscore", "catalyst", "zb-institute", "rho-construction", "aevum-police", "alpha-ent", "millenium-fitness", "lexo-corp", "aerocorp", "global-pharm", "galactic-cyber", "snap-fitness", "omnia", "unitalife", "deltaone", "defcomm", "zeus-med", "solaris", "icarus", "univ-energy", "taiyang-digital", "zb-def", "nova-med", "infocomm", "applied-energetics", "run4theh111z", "titan-labs", "microdyne", "stormtech", "fulcrumtech", "helios", "vitalife", "omnitek", "kuai-gong", "4sigma", ".", "b-and-a", "powerhouse-fitness", "nwo", "blade", "clarkinc", "The-Cave", "megacorp", "ecorp", "fulcrumassets"];
	let biggestSoFar = 0;
	let newTarget = "";
	for (let i = 0; i < minions.length; i++) {
		const minion = minions[i];
		let currentBiggestSoFar=ns.getServerMaxMoney(minion);
		if (ns.getServerNumPortsRequired(minion) <= 3 && ns.getServerRequiredHackingLevel(minion)<=ns.getHackingLevel() && currentBiggestSoFar>=biggestSoFar) {
			biggestSoFar = currentBiggestSoFar;
			newTarget = minion;
			ns.tprint(minion+"----"+ns.getServerRequiredHackingLevel(minion)+"---"+String(biggestSoFar));
		}
	}
	ns.tprint(newTarget);
}