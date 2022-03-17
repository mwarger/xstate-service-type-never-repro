import { assign, createMachine } from 'xstate';

type ParticipantsType = Array<{
	id: string;
	first_name: string;
	last_name: string;
}>;

export const classRegistrationMachine =
	/** @xstate-layout N4IgpgJg5mDOIC5QGEA2BDWsBKYoEtYAXAJ3SPwHsA7AOgEkA5egFQGJFQAHS2fCmpxAAPRAEYAbBNoAGCQCYA7PLHyArPIAsmsZoA0IAJ7iAzCdoBOEwA41m+RLEWHJzQF83BtJhx5Cpcio6ADEwIgBjAAt8aigABXQSCnD8LnRqIlg2CBowWhiAN0oAazzvLFwCYjIBELComPjE5NT0zIRCynDAmgBtGQBdIR4+WqFRBDUNWhMLNUUrawlNNRlFA2MEC01ZEzETB3krbbU9jy8MCr9qnrqI6NiEpPwUtIyssBISShJaLgwiAAzH4AW1o5V8VQCtVooXujSeLTe7U63Vq-SGSBAI34QXGiCm8hmcwWNmWq3WRkQ8hkYloams+1Orhk8hpikUHk8IGolAgcCEEMq-hqQQYzBYw14uMEWIm9g2pnMjJkJikSwZR2s5xAQuu0LFcIaj2aL1a7ylozxcup1nMJlWYjs1gc9jEYkVCDEa1oDgkc226mW9jUOr1UNFNFoiLNyIAymBUGBwrU4+ESGAwNRLTLszaEIprNZaIoVoXNDJNHa5JTNu7pEc5BXNCZK0s1WHLpCRbdYfVIjHXm0AKJfH45sb5wvF0vzazN6sSWvU2m0FZ7DkORQyCwWRQmTs+YU3SfcaWnkTiayelS7RR2FQ2WYSGRyLluIA */
	createMachine(
		{
			tsTypes: {} as import('./classRegistrationMachine.typegen').Typegen0,
			schema: {
				context: {} as {
					participants: ParticipantsType;
				},
				events: {} as {
					type: 'done.invoke.ClassRegistration.FetchingParticipants:invocation[0]';
					result: ParticipantsType;
				},
			},
			id: 'ClassRegistration',
			initial: 'INIT',
			states: {
				INIT: {
					always: {
						target: '#ClassRegistration.FetchingParticipants',
					},
				},
				FetchingParticipants: {
					invoke: {
						src: 'fetchParticipants',
						onDone: [
							{
								actions: 'setParticipants',
								target: '#ClassRegistration.ParticipantSelectionScreen',
							},
						],
						onError: [
							{
								target: '#ClassRegistration.FetchParticipantError',
							},
						],
					},
				},
				ParticipantSelectionScreen: {},
				FetchParticipantError: {},
			},
		},
		{
			actions: {
				setParticipants: assign((_, event) => {
					return {
						participants: event.result,
					};
				}),
			},
		}
	);
