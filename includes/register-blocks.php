<?php

function up_register_blocks() {
  $blocks = [
    ['name' => 'we-are-team']
  ];
  foreach($blocks as $block){
    register_block_type(
        PLUGIN_PATH . 'build/blocks/' . $block['name']
    );
}
}