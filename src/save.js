/**
 * WordPress dependencies
 */
import { RawHTML } from '@wordpress/element';

export default function save( { attributes } ) {
	return <div><RawHTML>{ attributes.content}</RawHTML></div>;
}