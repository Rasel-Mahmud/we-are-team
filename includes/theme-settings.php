<?php

function we_are_team_image_size(){
    add_image_size('weAreTeam', 400, 600, true);
}

function we_are_team_image_size_add($size_names){
    return array_merge($size_names, ['weAreTeam' => __('We Are Team')]);
}