/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { createDecorator } from 'vs/platform/instantiation/common/instantiation';

export const SIGN_SERVICE_ID = 'signService';
export const ISignService = createDecorator<ISignService>(SIGN_SERVICE_ID);

export interface IMessage {
	id: string;
	data: string;
}

export interface ISignService {
	readonly _serviceBrand: undefined;

	createNewMessage(value: string): Promise<IMessage>;
	validate(message: IMessage, value: string): Promise<boolean>;
	sign(value: string): Promise<string>;
}
