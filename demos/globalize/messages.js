const msg = {
	fr: {
		// locale id
		locale: 'fr',
		locale_name: 'français',

		title: 'Le JDR barbant, de retour !',
		description: 'Un RPG ultra-simple',
		keywords: 'jeu, jdr, rpg, aventure',

		back: 'Retour',

		app_title: 'Le JDR barbant',
		play_button_caption: 'Jouer !',
		meta_header: 'Réglages',

		meta_volume: 'Son :',
		meta_volume_on: 'normal',
		meta_volume_off: 'éteint',
		meta_volume_half: 'faible',
		meta_music: 'Musique :',
		meta_music_on: 'oui',
		meta_music_off: 'non',
		meta_locale: 'Langue :',
		meta_tutorial: 'Tutoriel',
		meta_statistics: 'Statistiques',
		meta_rate_app: 'Noter l’appli',
		meta_share: 'Partager',
		meta_contact_us: 'Contact',
		meta_facebook: 'facebook',
		meta_twitter: 'twitter',
		meta_fork: 'Forker sur Github',
		meta_save: 'Sauvegarder',
		meta_update: 'Mettre à jour',
		meta_advanced: 'Avancé…',
		meta_fullscreen : 'Plein écran :',
		meta_fullscreen_on : 'actif',
		meta_fullscreen_off : 'inactif',
		meta_test_error: 'Tester une erreur',
		meta_reset: 'Réinitialiser le jeu',
		meta_refresh: 'relancer l’appli',
		meta_report_bugs: 'Signaler un bug',

		inventory_widget_title: 'Inventaire',
		knowledge_widget_title: 'Savoir',

		timer_text: '{delay_s, plural, =0 {Vous pouvez cliquer !} other {Encore {humanized_delay}…}}',

		stats_level: 'Niveau',
		stats_health: 'Santé',
		stats_mana: ' Mana',
		stats_strength: 'Force',
		stats_agility: 'Agilité',
		stats_vitality: 'Vitalité',
		stats_wisdom: 'Sagesse',
		stats_luck: 'Chance',
		stats_coin_count: 'Écus',
		stats_item_count: 'Objets',
		stats_token_count: 'Jetons',
		stats_click_count: 'Clics',

		inventory_control_quality: 'Rareté',
		inventory_control_enchant_level: 'Améliorations',
		inventory_control_damage: 'Dégâts : {min_damage, number} - {max_damage, number}',
		inventory_control_cmd_sell: 'Vendre',
		inventory_control_cmd_equip: 'Équiper',

		weapon_base_axe: 'hache',
		weapongender_axe: 'female',
		weapon_base_bow: 'arc',
		weapongender_bow: 'male',
		weapon_base_claw: 'griffe',
		weapongender_claw: 'female',
		weapon_base_dagger: 'dague',
		weapongender_dagger: 'female',
		weapon_base_grimoire: 'grimoire',
		weapongender_grimoire: 'male',
		weapon_base_harp: 'harpe',
		weapongender_harp: 'female',
		weapon_base_knife: 'couteau',
		weapongender_knife: 'male',
		weapon_base_longbow: 'arc long',
		weapongender_longbow: 'male',
		weapon_base_longsword: 'épée longue',
		weapongender_longsword: 'female',
		weapon_base_luth: 'luth',
		weapongender_luth: 'male',
		weapon_base_mace: 'masse',
		weapongender_mace: 'female',
		weapon_base_scythe: 'faux',
		weapongender_scythe: 'female',
		weapon_base_spear: 'lance',
		weapongender_spear: 'female',
		weapon_base_spoon: 'cuillère',
		weapongender_spoon: 'female',
		weapon_base_staff: 'bâton',
		weapongender_staff: 'male',
		weapon_base_sword: 'épée',
		weapongender_sword: 'female',
		weapon_base_wand: 'baguette',
		weapongender_wand: 'female',

		weapon_qualifier1_admirable: 'admirable',
		weapon_qualifier1_arcanic: 'arcanique',
		weapon_qualifier1_bestial: '{gender, select, male {bestial} other {bestiale}}',
		weapon_qualifier1_bone: 'd’os',
		weapon_qualifier1_brass: 'de cuivre',
		weapon_qualifier1_cardboard: 'en carton',
		weapon_qualifier1_complex: 'complexe',
		weapon_qualifier1_composite: 'composite',
		weapon_qualifier1_consecrated: '{gender, select, male {consacré} other {consacrée}}',
		weapon_qualifier1_crafted: '{gender, select, male {artisanal} other {artisanale}}',
		weapon_qualifier1_cruel: '{gender, select, male {cruel} other {cruelle}}',
		weapon_qualifier1_cunning: '{gender, select, male {rusé} other {rusée}}',
		weapon_qualifier1_cursed: '{gender, select, male {maudit} other {maudite}}',
		weapon_qualifier1_emerald: 'd’émeraude',
		weapon_qualifier1_engraved: '{gender, select, male {gravé} other {gravée}}',
		weapon_qualifier1_forbidden: '{gender, select, male {interdit} other {interdite}}',
		weapon_qualifier1_forgotten: '{gender, select, male {oublié} other {oubliée}}',
		weapon_qualifier1_ghost: 'fantôme',
		weapon_qualifier1_golden: 'd’or',
		weapon_qualifier1_heavy: '{gender, select, male {lourd} other {lourde}}',
		weapon_qualifier1_heroic: 'héroïque',
		weapon_qualifier1_holy: '{gender, select, male {saint} other {sainte}}',
		weapon_qualifier1_inflexible: 'inflexible',
		weapon_qualifier1_invincible: 'invincible',
		weapon_qualifier1_iron: 'de fer',
		weapon_qualifier1_jade: 'de jade',
		weapon_qualifier1_light: '{gender, select, male {léger} other {légère}}',
		weapon_qualifier1_living: '{gender, select, male {vivant} other {vivante}}',
		weapon_qualifier1_lost: '{gender, select, male {perdu} other {perdue}}',
		weapon_qualifier1_mechanical: 'mécanique',
		weapon_qualifier1_mysterious: '{gender, select, male {mystérieux} other {mystérieuse}}',
		weapon_qualifier1_old: '{gender, select, male {vieux} other {vieille}}',
		weapon_qualifier1_onyx: 'd’onyx',
		weapon_qualifier1_overrated: '{gender, select, male {surfait} other {surfaite}}',
		weapon_qualifier1_powerful: '{gender, select, male {puissant} other {puissante}}',
		weapon_qualifier1_practical: 'pratique',
		weapon_qualifier1_proven: '{gender, select, male {éprouvé} other {éprouvée}}',
		weapon_qualifier1_raging: '{gender, select, male {enragé} other {enragée}}',
		weapon_qualifier1_robust: 'robuste',
		weapon_qualifier1_sapphire: 'de saphir',
		weapon_qualifier1_savage: 'sauvage',
		weapon_qualifier1_silver: 'd’argent',
		weapon_qualifier1_simple: 'simple',
		weapon_qualifier1_sinister: 'sinistre',
		weapon_qualifier1_skeleton: 'squelette',
		weapon_qualifier1_solid: 'solide',
		weapon_qualifier1_steel: 'd’acier',
		weapon_qualifier1_strange: 'étrange',
		weapon_qualifier1_subtile: '{gender, select, male {subtil} other {subtile}}',
		weapon_qualifier1_swift: 'rapide',
		weapon_qualifier1_unwavering: 'inébranlable',
		weapon_qualifier1_used: '{gender, select, male {usé} other {usée}}',
		weapon_qualifier1_whirling: '{gender, select, male {tournoyant} other {tournoyante}}',
		weapon_qualifier1_wooden: 'en bois',

		weapon_qualifier2_adjudicator: 'de juge',
		weapon_qualifier2_ambassador: 'd’ambassadeur',
		weapon_qualifier2_ancients: 'des Anciens',
		weapon_qualifier2_apprentice: 'd’apprenti',
		weapon_qualifier2_assaulting: 'd’assaut',
		weapon_qualifier2_beginner: 'de débutant',
		weapon_qualifier2_brave: 'de brave',
		weapon_qualifier2_conqueror: 'de conquérant',
		weapon_qualifier2_cruel_tyrant: 'de tyran cruel',
		weapon_qualifier2_defender: 'de défenseur',
		weapon_qualifier2_destructor: 'de destructeur',
		weapon_qualifier2_dwarven: 'des nains',
		weapon_qualifier2_elite: 'd’élite',
		weapon_qualifier2_elven: 'elfique',
		weapon_qualifier2_executioner: 'de bourreau',
		weapon_qualifier2_expert: 'd’expert',
		weapon_qualifier2_explorer: 'd’explorateur',
		weapon_qualifier2_gladiator: 'de gladiateur',
		weapon_qualifier2_goddess: 'de la déesse',
		weapon_qualifier2_guard: 'de guarde',
		weapon_qualifier2_hunter: 'de chasseur',
		weapon_qualifier2_judgement: 'de jugement',
		weapon_qualifier2_king: 'de roi',
		weapon_qualifier2_mediator: 'de médiateur',
		weapon_qualifier2_mercenary: 'de mercenaire',
		weapon_qualifier2_militia: 'de militien',
		weapon_qualifier2_nightmare: 'du cauchemar',
		weapon_qualifier2_noble: 'de noble',
		weapon_qualifier2_noob: 'de noob',
		weapon_qualifier2_pilgrim: 'de pélerin',
		weapon_qualifier2_pioneer: 'de pionnier',
		weapon_qualifier2_pirate: 'de pirate',
		weapon_qualifier2_profane: 'de profane',
		weapon_qualifier2_ranger: 'de traqueur',
		weapon_qualifier2_sorcerer: 'de sorcier',
		weapon_qualifier2_tormentor: 'de tourmenteur',
		weapon_qualifier2_training: 'd’entraînement',
		weapon_qualifier2_traveler: 'de voyageur',
		weapon_qualifier2_twink: 'de twink',
		weapon_qualifier2_tyrant: 'de tyran',
		weapon_qualifier2_upholder: 'de justicier',
		weapon_qualifier2_warfield: 'du champ de bataille',
		weapon_qualifier2_warfield_king: 'de roi du champ de bataille',
		weapon_qualifier2_warrior: 'de guerrier',
		weapon_qualifier2_wise: 'de sage',
		weapon_qualifier2_woodsman: 'de forestier',

		weapon_quality_common: 'commune',
		weapon_quality_uncommon: 'peu commune',
		weapon_quality_rare: 'rare',
		weapon_quality_epic: 'épique',
		weapon_quality_legendary: 'légendaire',
		weapon_quality_artifact: 'artefact',

		weapon: function build_weapon_name(weapon, intl, libs, debug_id) {
			var weapon_gender = libs.format('weapongender_' + weapon.base.id.slice(5), {});

			var parts = libs.format_multiple([
				weapon.base.msg_id,
				weapon.qualifier1.msg_id,
				weapon.qualifier2.msg_id
			], {gender: weapon_gender});

			parts[0] = libs._.capitalize(parts[0])
			return parts.join(' ');
		},

		no_clickmsg:
			'Vous avez hâte de partir à l’aventure !',
		clickmsg_bad:
		'Vous avez cliqué trop tôt !<br/>' +
		'+{penalty_s} secondes d’attente !',

			// original
			clickmsg_bored_log:
		'Vous vous ennuyez à tel point que vous bourrez un arbre des coups de poing pendant des heures…<br/>' +
		'Vous gagnez +1 en force !',
			clickmsg_caravan:
		'Vous avez été recruté pour escorter une caravane de marchands.<br/>' +
		'Vous gagnez {coins, number} écus !',
			clickmsg_dying_man:
		'Un mourant dans la rue vous lègue tout ce qu’il possède.<br/>' +
		'Vous gagnez {coins, number} écus !',
			clickmsg_ate_bacon:
		'Vous mangez du bacon.<br/>' +
		'Vous gagnez +1 niveau !',
			clickmsg_ate_mushroom:
		'Vous mangez un champignon.<br/>' +
		'Vous gagnez +1 niveau !',
			clickmsg_ate_zombie:
		'Vous mangez un zombie !<br/>' +
		'Vous gagnez +1 en mana !',
			clickmsg_refreshing_nap:
		'Vous faites une petite sieste et vous réveillez en pleine forme !<br/>' +
		'Vous gagnez +1 en vitalité !',
			clickmsg_older:
		'Vous vous sentez un peu plus vieux.<br/>' +
		'Vous gagnez +1 niveau !',
			clickmsg_stare_cup:
		'Vous fixez la cuillère intensément… et elle bouge presque !<br/>' +
		'Vous gagnez +2 en mana !',
			clickmsg_nuclear_fusion_paper:
		'You écrivez une thèse sur la fusion nucléaire.<br/>' +
		'Vous gagnez +1 en sagesse !',
			clickmsg_found_green_mushroom:
		'Vous avez trouvé un champignon vert.<br/>' +
		'Vous gagnez +1 niveau !',

			// me
			clickmsg_meet_old_wizard:
		'Vous rencontrez un vieux magicien mystérieux… Avant de vous confier la quête,<br/>' +
		'il vous raconte son histoire : Vous gagnez +1 en sagesse !',
			// electricbunnycomics.com
			clickmsg_good_necromancer:
		'Vous croisez un enfant sanglotant sur son hamster mort… Grâce à la nécromancie, vous le ranimez en hamster-zombie !<br/>' +
		'Curieusement, l’enfant pleure encore plus tout en s’enfuyant. Vous gagnez quand même +1 d’agilité en évitant les pierres jetées par les villageois.',
			// dorkly
			clickmsg_talk_to_all_villagers:
		'Vous avez parlé à tous les villageois du village : Aucune quête n’a pu vous échapper !<br/>' +
		'Par contre, vous avez mal à la tête d’avoir autant discuté. Mais +1 en mana grâce à cet entraînement !',
			clickmsg_always_keep_potions:
		'En bon aventurier, vous aviez gardé une potion de soin "au cas où".<br/>' +
		'Bien joué : votre santé est parfaite : +1 vitalité !',
			clickmsg_lost:
		'Avec toutes ces quêtes, vous en avez oublié où vous deviez aller…<br/>' +
		'Mais tourner en rond d’un coin à l’autre de la région est un bon exercice : +1 en vitalité !',
			// DK
			clickmsg_fate_sword:
		'Pour vous remercier d’avoir sauvé sa femme et ses enfants, ' +
		'le fermier vous offre "destinée", l’épée transmise dans sa famille de générations en générations !<br/>' +
		'30 minutes plus tard, le marchand ne vous en donne que {coins, number} écus… Quelle misère !',
			// dorkly
			clickmsg_grinding:
		'Faute de mieux, vous grindez pendant des heures et des heures… ' +
		'Et oui, c’est un RPG, vous vous attendiez à quoi ?<br/>' +
		'Mais ça paie : +1 niveau !',
			// ?
			clickmsg_so_many_potions:
		'Le combat contre le boss final fut dur, très dur…<br/>' +
		'Et surtout, +1 en force pour avoir réussi à vous retenir malgré les 28 potions que vous avez bu !',
			// cad-comic.com
			clickmsg_rematch:
		'Vous avez été battu par un gobelin ! Honteux, vous parcourez le pays, acceptant quête sur quête pour vous entraîner, avant de le défier à nouveau<br/>' +
		'Hélas, il s’est entraîné aussi de son côté et vous bat à nouveau ! Enfin bon, le +1 en niveau que vous aviez gagné servira bien un jour…',
			// paintraincomic.com
			clickmsg_useless:
		'Arrivé au village, le maire vous assure que le pays n’est pas dangereux ; La sorcière dont vous aviez entendu parler s’est trouvé quelqu’un et ne maudis plus personne ; ' +
		'Les fantômes du cimetière hanté s’occupent gentiment de leurs proches ; ' +
		'Le géant aide les villageois aux travaux des champs.<br/>' +
		'Vous vous sentez inutile et réfléchissez à votre place en ce monde… +1 en sagesse !',
			// memecenter.com
			clickmsg_escort:
		'Vous devez escorter un NPC important. ' +
		'Hélas, si vous marchez il va plus vite que vous, mais si vous courrez c’est vous qui allez plus vite !<br/>' +
		'En zigzagant et en tournant en rond ça passe. ' +
		'+1 en vitalité grâce à tout cet exercice !',
			// memecenter.com
			clickmsg_rare_goods_seller:
		'Vous croisez sur la route un vieil homme habillé de façon excentrique. ' +
		'Gagné, c’est un vendeur d’objets rares !<br/>' +
		'Il vous fait un très bon prix sur une [TODO weapon].',
			// memecenter.com
			clickmsg_progress_loop:
		'Il vous faudrait un meilleur équipement pour pouvoir monter en niveau. ' +
		'Mais il vous faudrait monter en niveau pour gagner un meilleur équipement. ' +
		'Cruel dilemme !<br/>' +
		'Heureusement, vous trouvez un [TODO weapon] au fond d’un puits !',
			// memecenter.com/motohorse
			clickmsg_idiot_bandits:
		'On parle de vous depuis que vous avez tué le dragon et la sorcière maléfique ! ' +
		'Des bandits vous tendent une embuscade pour voler votre butin.<br/>' +
		'Quelle drôle d’idée ! Vous lisez dans leurs yeux qu’ils le comprennent, juste avant que votre boule de feu les réduise en cendre.<br/>' +
		'Heureusement, les pièces d’or ne brûlent pas&nbsp: +{coins, number} écus !',
			// don't remember the source for this one
			clickmsg_princess:
		'« Vous n’emporterez pas la princesse ! » vous crie le terrible mage noir, ' +
		'alors que vous parvenez au sommet du dongeon.<br/>' +
		'Vous le rassurez : seul le butin vous intéresse.' +
		'Il vous laisse vous servir (+{coins, number} écus) et enchante même une arme pour vous ! ([TODO weapon])',
			// "make friends" necromancy
			xclickmsg_make_friends:
		'',
			// licorne multicolore
			xclickmsg_unicorns:
		'',
			// DM of the ring
			clickmsg_bad_village:
		'Vous arrivez dans un village. Il n’y a pas de marchand d’armes ou de potions ! ' +
		'Et l’auberge ne propose pas de quêtes !!<br/>' +
		'C’en est trop : sur votre ordre, les éclairs et les météorites tombent du ciel pour raser ce pitoyable endroit. ' +
		'Au passage, bonne occasion de pratiquer votre magie : +1 mana.',
			// memes
			xclickmsg_arrown_in_the_knee:
		'', // arrow in the knee
			// retour chez le mage noir, apprentissage de sorts
			xclickmsg_black_mage_again:
		'',
			// ?
			clickmsg_mana_mana:
		'« Mah na mah na » ' +
		'« Tou tou tou dou dou »<br/>' +
		'+1 mana !',
			/*
			 // ?
			 clickmsg_:
			 '',
			 */

			/*
			 "I know that the stars are not really stars, that they're just thousands of helicopters up there in the sky." Then she looked up at the clouds, and started crying.

			 */
			/*
			 skill_spell_meteor:
			 'Météorite',
			 skill_spell_meteor_shower:
			 'Pluie de météorite',
			 skill_spell_lightning:
			 'Éclair',
			 skill_spell_storm:
			 'Tempête d’éclairs',
			 skill_necromancy_animate_dead:
			 'Animation des morts',
			 */

			object_found: 'You found a [+1 Common Spiky Shield]!',

			combat_escaped: 'You were attacked by a [Level 1 Blind Falcon] but you got away just before it was about to kill you.'
	},
	en: {
		// locale id
		locale: 'en',
		locale_name: 'english',

		// content
		// http://formatjs.io/guides/message-syntax/

		title: 'The Boring RPG reloaded',
		description: 'The most simple RPG',
		keywords: 'game, RPG, adventure',

		back: 'Back',

		app_title: 'The Boring RPG',
		play_button_caption: 'Play!',
		meta_header: 'Settings',

		meta_volume: 'Sound :',
		meta_volume_on: 'on',
		meta_volume_off: 'off',
		meta_volume_half: 'medium',
		meta_music: 'Music :',
		meta_music_on: 'on',
		meta_music_off: 'off',
		meta_locale: 'Language :',
		meta_tutorial: 'Tutorial',
		meta_statistics: 'Statistics',
		meta_rate_app: 'Rate app',
		meta_share: 'Share',
		meta_contact_us: 'Contact us',
		meta_facebook: 'facebook',
		meta_twitter: 'twitter',
		meta_fork: 'Fork on Github',
		meta_save: 'Save',
		meta_update: 'Update',
		meta_advanced: 'Advanced…',
		meta_fullscreen : 'Full screen :',
		meta_fullscreen_on : 'on',
		meta_fullscreen_off : 'off',
		meta_test_error: 'Test error',
		meta_reset: 'Reset game',
		meta_refresh: 'Restart app',
		meta_report_bugs: 'Report a bug',

		inventory_widget_title: 'Inventory',
		knowledge_widget_title: 'Knowledge',

		timer_text: '{delay_s, plural, =0 {You can click now!} other {{humanized_delay} left.}}',

		stats_level: 'Level',
		stats_health: 'Health',
		stats_mana: 'Mana',
		stats_strength: 'Strength',
		stats_agility: 'Agility',
		stats_vitality: 'Vitality',
		stats_wisdom: 'Wisdom',
		stats_luck: 'Luck',
		stats_coin_count: 'Gold',
		stats_item_count: 'Items',
		stats_token_count: 'Tokens',
		stats_click_count: 'Clicks',

		inventory_control_quality: 'Rarity',
		inventory_control_enchant_level: 'Enhancements',
		inventory_control_damage: 'Damage : {min_damage, number} - {max_damage, number}',
		inventory_control_cmd_sell: 'Sell',
		inventory_control_cmd_equip: 'Equip',

		weapon_base_axe: 'axe',
		weapongender_axe: 'neutral',
		weapon_base_bow: 'bow',
		weapongender_bow: 'neutral',
		weapon_base_claw: 'claw',
		weapongender_claw: 'neutral',
		weapon_base_dagger: 'dagger',
		weapongender_dagger: 'neutral',
		weapon_base_grimoire: 'grimoire',
		weapongender_grimoire: 'neutral',
		weapon_base_harp: 'harp',
		weapongender_harp: 'neutral',
		weapon_base_knife: 'knife',
		weapongender_knife: 'neutral',
		weapon_base_longbow: 'long bow',
		weapongender_longbow: 'neutral',
		weapon_base_longsword: 'long sword',
		weapongender_longsword: 'neutral',
		weapon_base_luth: 'luth',
		weapongender_luth: 'neutral',
		weapon_base_mace: 'scythe',
		weapongender_mace: 'neutral',
		weapon_base_scythe: 'spear',
		weapongender_scythe: 'neutral',
		weapon_base_spear: 'spear',
		weapongender_spear: 'neutral',
		weapon_base_spoon: 'spoon',
		weapongender_spoon: 'neutral',
		weapon_base_staff: 'staff',
		weapongender_staff: 'neutral',
		weapon_base_sword: 'sword',
		weapongender_sword: 'neutral',
		weapon_base_wand: 'wand',
		weapongender_wand: 'neutral',

		weapon_qualifier1_admirable: 'admirable',
		weapon_qualifier1_arcanic: 'arcanic',
		weapon_qualifier1_bestial: 'bestial',
		weapon_qualifier1_bone: 'bone',
		weapon_qualifier1_brass: 'brass',
		weapon_qualifier1_cardboard: 'cardboard',
		weapon_qualifier1_complex: 'complex',
		weapon_qualifier1_composite: 'composite',
		weapon_qualifier1_consecrated: 'consecrated',
		weapon_qualifier1_crafted: 'crafted',
		weapon_qualifier1_cruel: 'cruel',
		weapon_qualifier1_cunning: 'cunning',
		weapon_qualifier1_cursed: 'cursed',
		weapon_qualifier1_emerald: 'emerald',
		weapon_qualifier1_engraved: 'engraved',
		weapon_qualifier1_forbidden: 'forbidden',
		weapon_qualifier1_forgotten: 'forgotten',
		weapon_qualifier1_ghost: 'ghost',
		weapon_qualifier1_golden: 'golden',
		weapon_qualifier1_heavy: 'heavy',
		weapon_qualifier1_heroic: 'heroic',
		weapon_qualifier1_holy: 'holy',
		weapon_qualifier1_inflexible: 'inflexible',
		weapon_qualifier1_invincible: 'invincible',
		weapon_qualifier1_iron: 'iron',
		weapon_qualifier1_jade: 'jade',
		weapon_qualifier1_light: 'light',
		weapon_qualifier1_living: 'living',
		weapon_qualifier1_lost: 'lost',
		weapon_qualifier1_mechanical: 'mechanical',
		weapon_qualifier1_mysterious: 'mysterious',
		weapon_qualifier1_old: 'old',
		weapon_qualifier1_onyx: 'onyx',
		weapon_qualifier1_overrated: 'overrated',
		weapon_qualifier1_powerful: 'powerful',
		weapon_qualifier1_practical: 'practical',
		weapon_qualifier1_proven: 'proven',
		weapon_qualifier1_raging: 'raging',
		weapon_qualifier1_robust: 'robust',
		weapon_qualifier1_sapphire: 'sapphire',
		weapon_qualifier1_savage: 'savage',
		weapon_qualifier1_silver: 'silver',
		weapon_qualifier1_simple: 'simple',
		weapon_qualifier1_sinister: 'sinister',
		weapon_qualifier1_skeleton: 'skeleton',
		weapon_qualifier1_solid: 'solid',
		weapon_qualifier1_steel: 'steel',
		weapon_qualifier1_strange: 'strange',
		weapon_qualifier1_subtile: 'subtile',
		weapon_qualifier1_swift: 'swift',
		weapon_qualifier1_unwavering: 'unwavering',
		weapon_qualifier1_used: 'used',
		weapon_qualifier1_whirling: 'whirling',
		weapon_qualifier1_wooden: 'wooden',

		weapon_qualifier2_adjudicator: 'adjudicator’s',
		weapon_qualifier2_ambassador: 'ambassador’s',
		weapon_qualifier2_ancients: 'of the ancients',
		weapon_qualifier2_apprentice: 'apprentice’s',
		weapon_qualifier2_assaulting: 'assaulting',
		weapon_qualifier2_beginner: 'beginner’s',
		weapon_qualifier2_brave: 'of the brave',
		weapon_qualifier2_conqueror: 'conqueror’s',
		weapon_qualifier2_cruel_tyrant: 'cruel tyrant’s',
		weapon_qualifier2_defender: 'defender’s',
		weapon_qualifier2_destructor: 'destructor’s',
		weapon_qualifier2_dwarven: 'dwarven',
		weapon_qualifier2_elite: 'elite',
		weapon_qualifier2_elven: 'elven',
		weapon_qualifier2_executioner: 'executioner’s',
		weapon_qualifier2_expert: 'expert',
		weapon_qualifier2_explorer: 'explorer’s',
		weapon_qualifier2_gladiator: 'gladiator’s',
		weapon_qualifier2_goddess: 'of the goddess',
		weapon_qualifier2_guard: 'guard’s',
		weapon_qualifier2_hunter: 'hunter’s',
		weapon_qualifier2_judgement: 'of judgement',
		weapon_qualifier2_king: 'king’s',
		weapon_qualifier2_mediator: 'mediator’s',
		weapon_qualifier2_mercenary: 'mercenary’s',
		weapon_qualifier2_militia: 'militia’s',
		weapon_qualifier2_nightmare: 'nightmare’s',
		weapon_qualifier2_noble: 'noble’s',
		weapon_qualifier2_noob: 'of the noob',
		weapon_qualifier2_pilgrim: 'pilgrim’s',
		weapon_qualifier2_pioneer: 'pioneer’s',
		weapon_qualifier2_pirate: 'pirate’s',
		weapon_qualifier2_profane: 'profane’s',
		weapon_qualifier2_ranger: 'ranger’s',
		weapon_qualifier2_sorcerer: 'sorcerer’s',
		weapon_qualifier2_tormentor: 'tormentor’s',
		weapon_qualifier2_training: 'training',
		weapon_qualifier2_traveler: 'traveler’s',
		weapon_qualifier2_twink: 'of the twink',
		weapon_qualifier2_tyrant: 'tyrant’s',
		weapon_qualifier2_upholder: 'upholder’s',
		weapon_qualifier2_warfield: 'warfield’s',
		weapon_qualifier2_warfield_king: 'warfield king’s',
		weapon_qualifier2_warrior: 'warrior’s',
		weapon_qualifier2_wise: 'of the wise',
		weapon_qualifier2_woodsman: 'woodsman’s',

		weapon_quality_common: 'common',
		weapon_quality_uncommon: 'uncommon',
		weapon_quality_rare: 'rare',
		weapon_quality_epic: 'epic',
		weapon_quality_legendary: 'legendary',
		weapon_quality_artifact: 'artifact',

		weapon: function build_weapon_name(weapon, intl, libs, debug_id) {
			var parts = libs.format_multiple([
				weapon.qualifier2.msg_id,
				weapon.qualifier1.msg_id,
				weapon.base.msg_id
			], {});

			if (libs._s.startsWith(parts[0], 'of')) {
				var q2 = parts.shift();
				parts.push(q2);
			}

			return libs._s.words(parts.join(' ')).map(libs._s.capitalize).join(' ');
		},

		// meta
		no_clickmsg:
			'You’re eager to start adventuring!',

		clickmsg_bad:
		'You clicked too early!<br/>' +
		'+{penalty_s}s !',
		// original
		clickmsg_bored_log:
		'You were so bored, you punched a log for hours!<br/>' +
		'You gained +1 strength!',
		clickmsg_caravan:
		'You were hired to protect a caravan of merchants.<br/>' +
		'You gained {coins, number} coins!',
		clickmsg_dying_man:
		'A dying man on the street left you everything he had.<br/>' +
		'You gained {coins, number} coins!',
		clickmsg_ate_bacon:
		'You ate some bacon.<br/>' +
		'You gained +1 level!',
		clickmsg_ate_mushroom:
		'You ate a mushroom.<br/>' +
		'You gained +1 level!',
		clickmsg_ate_zombie:
		'You ate a zombie.<br/>' +
		'You gained +1 mana!',
		clickmsg_refreshing_nap:
		'You took a nap and feel refreshed.<br/>' +
		'You gained +1 vitality!',
		clickmsg_older:
		'You feel a little older.<br/>' +
		'You gained +1 level!',
		clickmsg_stare_cup:
		'You stare really hard at a cup, and it almost moves!<br/>' +
		'You gained +2 mana!',
		clickmsg_nuclear_fusion_paper:
		'You wrote a paper on nuclear fusion.<br/>' +
		'You gained +1 wisdom!',
		clickmsg_found_green_mushroom:
		'You found a green mushroom.<br/>' +
		'You gained +1 level!',

		// me
		clickmsg_meet_old_wizard:
		'Vous meet a mysterious old wizard…<br/>' +
		'Before giving you the quest, he tells you his loooong story : Vous gain +1 wisdom!',
		// electricbunnycomics.com
		clickmsg_good_necromancer:
		'You meet a child weeping over his dead hamster pet… Thanks to necromancy, you reanimate it an a hamster-zombie! ' +
		'Oddly, the child cries even more while running away. Fortunately, you gain +1 agility for avoiding the stones thrown by the villagers.',
		// dorkly
		clickmsg_talk_to_all_villagers:
		'You spoke to all villagers in the village : no quest may have escaped you! ' +
		'On the other hand, your head aches for discussing so much.<br/>' +
		'+1 mana thanks to this mental training!',
		clickmsg_always_keep_potions:
			'En bon aventurier, vous aviez gardé une potion de soin "au cas où" : Bravo, votre santé est entièrement restaurée !',
		clickmsg_lost:
			'Avec toutes ces quêtes, vous en avez oublié où vous deviez aller. Mais tourner en rond dans toute la région est bon pour votre santé : +1 en vitalité !',
		// DK
		clickmsg_fate_sword:
		'Pour vous remercier d’avoir sauvé sa femme et ses enfants, le fermier vous offre "destinée", l’épée transmise dans sa famille de générations en générations. ' +
		'30 minutes plus tard, le marchand ne vous en donne que 17 écus... Ah ces pauvres !!!',
		// dorkly
		clickmsg_grinding:
			'Faute de mieux, vous grindez pendant des heures et des heures… Et oui, c’est un RPG, vous vous attendiez à quoi ? Mais ça paie : +1 niveau !',
		// ?
		clickmsg_so_many_potions:
			'Le combat contre le boss final fut dur, très dur… Et surtout, +1 en force pour avoir réussi à vous retenir après avoir bu 25 potions !',
		// cad-comic.com
		clickmsg_rematch:
		'Vous avez été battu par un gobelin ! Honteux, vous parcourez le pays, acceptant quête sur quête pour vous entraîner. ' +
		'Hélas, il en a fait autant et vous bat à nouveau ! Enfin bon, le +1 de niveau servira bien quand même…',
		// paintraincomic.com
		clickmsg_useless:
		'Arrivé au village, le maire vous assure que le pays n’est pas dangereux ; La sorcière dont vous aviez entendu parler s’est trouvé quelqu’un et ne maudis plus personne. ' +
		'Le cimetière hanté était un cimetière d’animaux de compagnie et les habitants sont heureux de les revoir ; Le géant aide les villageois aux travaux des champs. ' +
		'Vous vous sentez inutile et réfléchissez à votre place en ce monde… +1 en sagesse !',
		// memecenter.com
		clickmsg_escort:
		'Vous devez escorter un NPC important. Hélas, si vous marchez il va plus vite que vous, mais si vous courrez c’est vous qui allez trop vite ! ' +
		'En zigzagant et en tournant en rond ça passe. +1 en vitalité grâce à tous ces efforts !',
		// memecenter.com
		clickmsg_rare_goods_seller:
			'Vous croisez sur la route un vieil homme habillé de façon excentrique. Gagné, c’est un vendeur d’objets rares ! Il vous fait un très bon prix pour une [TODO weapon]',
		// memecenter.com
		clickmsg_progress_loop:
		'Il vous faudrait un meilleur équipement pour pouvoir monter en niveau. Mais il faudrait monter en niveau pour pouvoir gagner un meilleur équipement. ' +
		'Cruel dilemne ! Heureusement, vous trouvez un [TODO weapon] au fond d’un puit !',
		// memecenter.com/motohorse
		clickmsg_idiot_bandits:
		'On parle de vous après que vous ayez tué le dragon et la sorcière maléfique. Des bandits vous tendent une embuscade. Quelle drôle d’idée ! ' +
		'À voir ses yeux, le dernier l’a presque compris une fraction de seconde avant que votre boule de feu ne le réduise en cendre. ' +
		'Heureusement, les pièces d’or ne brûlent pas : +33 écus !',
		// don't remember the source for this one
		clickmsg_princess:
		'« Vous n’emporterez pas la princesse ! » vous crie le terrible mage noir, alors que vous parvenez dans sa salle du trône. ' +
		'Vous le rassurez : seul le butin vous intéresse. Il vous laisse vous servir (+234 écus) et enchante même une arme pour vous ! ([TODO weapon])',
		// "make friends" necromancy
		xclickmsg_make_friends:
			'',
		// licorne multicolore
		xclickmsg_unicorns:
			'',
		// DM of the ring
		clickmsg_bad_village:
		'Vous arrivez dans un village. Il n’y a pas de marchand d’armes. ' +
		'Pas de marchand de potions non plus ! Et l’auberge ne propose pas de quêtes !!<br/>' +
		'C’en est trop : sur votre ordre, les éclairs et les météorites rasent ce lieu inutile.<br/>' +
		'Au passage, bon occasion de pratiquer votre magie : +1 mana.',
		// memes
		xclickmsg_arrown_in_the_knee:
			'', // arrow in the knee
		// retour chez le mage noir, apprentissage de sorts
		xclickmsg_black_mage_again:
			'',
		// ?
		clickmsg_mana_mana:
		'« Mah na mah na » « To to to do do »<br/>' +
		'+1 mana!',



		object_found: 'You found a [+1 Common Spiky Shield]!',

		combat_escaped: 'You were attacked by a [Level 1 Blind Falcon] but you got away just before it was about to kill you.'
	}
}

module.exports = msg
